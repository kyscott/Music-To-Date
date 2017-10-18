CREATE TABLE `FavoriteArtists` (
  `artistId` Int AUTO_INCREMENT NOT NULL,
  `artistName` VARCHAR(255) not null,
  FOREIGN KEY (`artistId`) REFERENCES user(userid),

  PRIMARY KEY ( `artistId` )
);
