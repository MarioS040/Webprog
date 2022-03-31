-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 17. Mrz 2022 um 17:13
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `yabe`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `articleName` varchar(255) NOT NULL,
  `articleDescription` varchar(255) NOT NULL,
  `Price` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `yabeart` varchar(255) DEFAULT NULL,
  `timeforauctionA` varchar(255) NOT NULL,
  `timeforauctionE` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `userhighestbid` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `articles`
--

INSERT INTO `articles` (`id`, `articleName`, `articleDescription`, `Price`, `path`, `yabeart`, `timeforauctionA`, `timeforauctionE`, `username`, `userhighestbid`, `createdAt`, `updatedAt`) VALUES
(1, 'Test Artikel', 'Test Artikel', 1, '2993683129423523pappmoebel-regal-a3-zubehoer-allzweckkiste-natur-01_1.jpg', 'false', '2022-03-17T17:00', '2022-12-30T17:00', 'mitarbeiter', NULL, '2022-03-17 16:01:11', '2022-03-17 16:01:11'),
(2, 'Fahrrad', 'Fahrrad', 100, '687170903108432181KONRRPNkL._AC_SX425_.jpg', 'false', '2022-03-17T17:01', '2022-12-30T17:01', 'mitarbeiter', NULL, '2022-03-17 16:01:50', '2022-03-17 16:01:50'),
(3, 'Komode', 'Komode Weiß', 151, '517531085391192312349686_6-202003021340.jpg', 'false', '2022-03-17T17:10', '2022-12-30T17:10', 'mitarbeiter', 'kunde', '2022-03-17 16:10:55', '2022-03-17 16:12:42');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `yabeempl` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `yabeempl`, `hash`, `createdAt`, `updatedAt`) VALUES
(1, 'mitarbeiter', 'mitarbeiter', 'mitarbeiter', 'true', '$2a$10$mTx7CjLHIaHhdDkS7bW.MeiSkHR2W.dPoGcclZg0hkLmfVs6cDD.6', '2022-03-17 15:59:54', '2022-03-17 15:59:54'),
(2, 'kunde', 'kunde', 'kunde', 'false', '$2a$10$Ph5fjJRjQ7RtVZ61O5teNOJaey.huADSLzluez4PfAd1.A7SZ/5ni', '2022-03-17 16:12:19', '2022-03-17 16:12:19');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
