exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(32)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      notNull: true,
    },
    performer: {
      type: 'TEXT',
      notNull: true,
    },
    genre: {
      type: 'TEXT',
      notNull: true,
    },
    duration: {
      type: 'INTEGER',
      notNull: false,
    },
    album_id: {
      type: 'VARCHAR(32)',
      notNull: true,
      references: 'albums(id)',
      onDelete: 'CASCADE',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
