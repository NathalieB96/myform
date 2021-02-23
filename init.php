#!/usr/bin/env php

<?php
$dbname = 'contactform.db';

$db = new SQLite3($dbname);
$db->exec("CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,fullname TEXT,email TEXT,request INTEGER,dataprivacy INTEGER DEFAULT '0')");

$db->exec("CREATE TABLE IF NOT EXISTS descriptiontext(id INTEGER PRIMARY KEY,descriptiontext TEXT NOT NULL)");

?>