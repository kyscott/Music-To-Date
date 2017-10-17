module.exports = function(sequelize, Sequelize) {

	var FavoriteArtists = sequelize.define('favoriteArtists', {
		artistId: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		artistName: {
			type: Sequelize.STRING,notEmpty: true
		}
	});

	return FavoriteArtists;

}
