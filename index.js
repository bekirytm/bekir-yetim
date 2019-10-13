console.log("Bu benim uygulamam.");

//npm init
// package.json dosyasını oluşturma.

//Scripts Alanı (package.json içerisinde)
//Bu alan bizim bir işlemi daha kolay yapabilmemize yardımcı olur.
//key değerini çalıştırarak işlem yaptırabiliriz.


//npm install .... (kuracağın modül)
//Bu şekilde modül kurulur.


//package-lock.json 
//Bu alan eklenen modüller hakkında veriler sunar. 



//npm install 
//node_modules silinirse veya silerseniz projede lazım olacak modülleri kendisi indirir.
















//Eğer bir projeyi canlıya alacaksak veya veri tabanına atacaksak modülleri atmamıza gerek yok
//Bunun yerine ilk önce npm install çalıştırırız ve gerekli modüleri package.json dan bulur ve hepsini kendisi indirir.



//Sadece geliştirme ortamında kullanılacak bir modül ekleyeceksek bunu 
// npm install webpack-cli --save-dev     ->Şeklinde ekleriz Canlıya aldığımızda yüklemek zorunda kalmayız....




//Sadece geliştirmede Kullanılacak modüller(paketler)
//  devDependencies    -> package.json da bulunuyor.


//Hep lazım olacak modüller(paketler)
//  dependencies   -> package.json da bulunuyor.









//GİT ve GİTHUB KULLANIMI    (package.json'a repository eklenmeli)

//echo "# bekir-yetim" >> README.md    ->  Readme dosyası oluşturuyor.

//git init                             ->  Git başlatılır.

//git add .                            -> Tüm dosyaları github'a atma. (Nokta tüm klasörler anlamında)

//git commit -m "first commit"         -> Tüm dosyaları commite ekleme.

//git remote add origin https://github.com/bekirytm/bekir-yetim.git         (Burası hangi repoya atacağımızı belirtir)

//git push -u origin master            -> username  ve password yazılacak. (Güncelleme yapar)







///NPM'de PAKET YAYINLAMA

// npm login                           -> Bu şekilde npm hesabına giriş yapılır.

// npm publish                         -> Tüm dosyalar npm'e paket olarak atılır.

//Bu şekilde paketimizi npm de oluşturduk ve npm içerisinde indirme gibi bilgilere ulaşabiliriz.
//örn: npm install bekir-yetim (Benim indirme komutum)


// npm unpublish bekir-yetim(paket ismi)  -> Paketi hesaptan silme