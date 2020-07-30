import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('test');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        'create table if not exists test ( id INTEGER PRIMARY KEY NOT NULL )',
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
};

export const insert = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((t) => {
      t.executeSql(
        'insert into test values (?) ',
        [id],
        (_, res) => resolve(res),
        (_, err) => reject(_, err)
      );
    });
  });
};

export const select = (id = null) => {
  const sql = id ? 'select * from test where id = ?' : 'select * from test';
  return new Promise((resolve, reject) => {
    db.transaction((t) => {
      t.executeSql(
        sql,
        [id],
        (_, res) => resolve(res),
        (_, err) => reject(_, err)
      );
    });
  });
};

export const update = (id, object) => {
  console.log(object);
  return new Promise((resolve, reject) => {
    db.transaction((t) => {
      t.executeSql(
        'update test set ? where id = ? ',
        [object, id],
        (_, res) => resolve(res),
        (_, err) => reject(_, err)
      );
    });
  });
};

export const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((t) => {
      t.executeSql(
        'delete from test where id = ? ',
        [id],
        (_, res) => resolve(res),
        (_, err) => reject(_, err)
      );
    });
  });
};
