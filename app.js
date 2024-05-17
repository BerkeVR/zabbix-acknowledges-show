const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 4000;

// MySQL bağlantı bilgileri
const dbConfig = {
    host: '',
    user: '', // MySQL kullanıcı adınız
    password: '', // MySQL şifreniz
    database: '' // Kullanmak istediğiniz veritabanının adı
};
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/user.html', (req, res) => {
  res.sendFile('/home/sirket1_proje/user.html');
});


// MySQL bağlantısını oluştur
const connection = mysql.createConnection(dbConfig);

// MySQL bağlantısını test et
connection.connect((err) => {
    if (err) {
        console.error('MySQL bağlantı hatası: ' + err.stack);
        return;
    }
    console.log('MySQL bağlantısı başarıyla kuruldu.');
});

// Express.js endpoint'i
app.use(express.static('/sirket_proje/app.js'));
app.get('/query', (req, res) => {
    const query = req.query.sql;

    if (!query) {
        res.status(400).json({ error: 'Sorgu parametresi eksik' });
        return;
    }

    // MySQL sorgusunu çalıştır
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('MySQL sorgu hatası: ' + error.stack);
            res.status(500).json({ error: 'Sunucu hatası' });
            return;
        }

        // Sorgu sonuçlarını JSON formatında gönder
        res.json(results);
    });
});

// Uygulamayı belirtilen port üzerinde çalıştır
app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışıyor.`);
});
