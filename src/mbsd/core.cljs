(ns mbsd.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [shadow.resource :as rc]
   [clojure.edn :as edn]
   [goog.string :as gstring]
   [goog.string.format]))

(def maasl ["Chaitra" "Vaishakh" "Jyeshtha" "Ashadha" "Shravana" "Bhadrapada" "Ashwin" "Kartika" "Margshirsh" "Paushya" "Magha" "Phalgun"])
(def pakshal ["Shukla" "Krushna"])
(def paksha-tithil ["Purnima" "Amavasya"])
(def tithil ["Pratham" "Dwitiya" "Trutiya" "Chaturthi" "Panchami" "Shashthi" "Saptmi" "Ashtmi" "Navmi" "Dashmi" "Ekadashi" "Dwadashi" "Trayodashi" "Chaturdashi"])
(def vaarl ["Ravivar" "Somvar" "Mangalvar" "Budhvar" "Bruhaspativar" "Shukrvar" "Shanivar"])
(def monthl ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])
(def nakl ["Ashvini" "Bharani" "Krittika" "Rohini" "Mrigashirsha" "Ardra" "Punarvasu" "Pushya" "Ashlesha" "Magha" "Purva Phalguni" "Uttara Phalguni" "Hast" "Chitra" "Svati" "Vishakha" "Anuradha" "Jyeshtha" "Mula" "Purva Ashadha" "Uttara Ashadha" "Sravana" "Dhanishta" "Shatabhisha" "Purva Bhadrapada" "Uttara Bhadrapada" "Revati"])
(def ritul ["Vasanta" "Grisma" "Varsa" "Sharad" "Hemanta" "Shishira"])
(def n20mbs 5561)

(def data (edn/read-string (rc/inline "./data.edn")))

(defn head []
  [:table
   [:tr [:td "नमो नम: । वन्दे मातरम् ।।"]]
   [:tr [:td "Hindu Panchand at Ujjain 0° Longitude"]]])

(defn smd [sh sm m t p v y cd cm n r]
  [:table
   [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]]
   [:tr [:td "Sunrise:"] [:td (str (gstring/format "%02d:%02d" sh sm) " hrs")]]
   [:tr [:td "Month:"] [:td (str (nth maasl (dec m)) "*")]]
   [:tr [:td "Date**"] [:td (if (> p 1) (+ 15 t) t)]]
   [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]]
   [:tr [:td "Paksha:"] [:td (nth pakshal (dec p))]]
   [:tr [:td "Tithi:"] [:td (if (< t 15) (nth tithil (dec t)) (nth paksha-tithil (dec p)))]]
   [:tr [:td "Vaar:"] [:td (nth vaarl (dec v))]]
   [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]]
   [:tr [:td (str (+ n20mbs y) " #MahabharatSamvat")]]
   [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]]
   [:tr [:td "Short Date format: "] [:td (gstring/format "%02d/%02d/%04d" (if (> p 1) (+ 15 t) t) m (+ n20mbs y))]]
   [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]]
   [:tr [:td "Nakshatra:"] [:td (nth nakl (dec n))]]
   [:tr [:td "Ritu:"] [:td (nth ritul (dec r))]] 
   [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]]
   [:tr [:td "#RejectChristianCalendar:"][:td (str (gstring/format "%02d" cd) "-" (nth monthl (dec cm)) "-" y)]]
   [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]] [:tr [:td] [:td]]])

(defn foot []
  [:div
   [:table [:tr [:td "Hindu Months"]]]
   [:table
    [:tr [:td "1 Chaitra"] [:td "2 Vaishakh"] [:td "3 Jyeshtha"]]
    [:tr [:td "4 Ashadha"] [:td "5 Shravana"] [:td "6 Bhadrapada"]]
    [:tr [:td "7 Ashwin"] [:td "8 Kartika"] [:td "9 Margshirsh"]]
    [:tr [:td "10 Pushya"] [:td "11 Magha"] [:td "12 Phalgun"]]]
   [:table
    [:tr [:td "*Amant"]]
    [:tr [:td "** Day number of the Month"]]]])

(defn home-page []
  [:div
   [head]
   [smd (:sunrise-hr data) (:sunrise-min data) (:maas data) (:tithi data) (:paksha data) (:vaar data) (:year data) (:day data) (:month data) (:nakshatra data) (:ritu data)]
   [foot]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
