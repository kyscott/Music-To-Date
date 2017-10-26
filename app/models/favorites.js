module.exports = function(sequelize, Sequelize) {
	var Favorite = sequelize.define('favorite', {
    id: {
      autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER
    },
    artistId: {
      type: Sequelize.INTEGER
    }
	});

  Favorite.associate = function(models) {
    Favorite.belongsTo(models.user, {
      onDelete:"CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    Favorite.belongsTo(models.artist, {
      onDelete:"CASCADE",
      foreignKey: {
        targetKey: "artistId",
        allowNull: true
      }
    });
}

    return Favorite;
  }
