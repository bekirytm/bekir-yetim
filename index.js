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