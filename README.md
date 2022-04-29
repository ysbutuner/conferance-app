
### `Confreans App`


Uygulama çalıştırılacağında sırasıyla aşşağıdaki adımların izlenmesi gerekmektedir.

1-) my-conferance-app klasör içerisinde `npm install` komutunun çalıştırılması gerekmektedir.
2-) my-conferance-app klasör içerisinde `npm run build` komutunun çalıştırılması gerekmektedir.
3-) my-conferance-app klasör içerisinde `node server.js` komutunun çalıştırılması gerekmektedir.



Adımları sırasıyla yaptıkdan sonra tarayıcı üzerinden [http://localhost:3001] veya [http://ServerIpAddress:3001] adreslerinde Confreans App yayınlanmaya başlancaktır.

Adımları izledikden sonra tarayıcıdan [http://ServerIpAddress:3001] adresine gittiğimiz zaman RoomId ile konferanasa katılabilirsiniz.
Room Id sınır konulmamış olup istediğiniz Id ile konferans başlatabilir yada katılabilirsiniz.

ServerIpAddress: `node server.js` komutunu çalıştırdığınız bilğisayarın ip adresi.

Farklı bir bilgisayar üzerinden bağlantı sağlamak için chrome tarayıcınızda `chrome://flags/#unsafely-treat-insecure-origin-as-secure` giderek aşşağıdaki adımları bağlantı sağlayacak bilgisayrınızda yapınız. Aksi taktirde bağlantı sağlanacaktır https bağlantısı olmadığı için kameranıza erişim sağlanamayacaktır.

1) Insecure origins treated as secure setting ögesini bulunuz.
2) Etkinleştiriniz. 
3) [http://ServerIpAddress:3001] alana eklenyiniz.
4) Tarayıcınızı yeniden başlat seçenegine basınız.

Artık bağlantı sağlayabilir durumda olmanız gerekmetedir.

RoomId aynı girilen bağlantılarda eşleşme sağlanıp konferans başlaması gerekmektedir.

Uygulamada;
- Redux,redux-persist,redux-thunk, react-router-dom,socket.io-client kütüphanelerini kullandım. 
- Uygulamada function ve componenetler ile hibrit olarak yazmaya özen gösterdim. Nedeni ise Şirkette de hibrit olarak kullanmanız üzerine böyle bir seçimde bulundum.
