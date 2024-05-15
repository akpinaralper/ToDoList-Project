# ToDoList-Project


Bu proje, kullanıcıların yapılacaklar listesini yönetmelerine olanak tanıyan basit bir Todo List uygulamasıdır. Kullanıcılar, yeni görevler ekleyebilir, mevcut görevleri silebilir, tüm görevleri temizleyebilir ve görevleri filtreleyebilir.

## Özellikler

- Yeni görev ekleme
- Görevleri listeleme
- Görevleri silme
- Tüm görevleri temizleme
- Görevleri arama ve filtreleme
- Görevleri yerel depolamada (localStorage) saklama

## Kurulum

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Bu projeyi klonlayın:
    ```bash
    git clone https://github.com/kullaniciadi/todo-list-app.git
    ```
2. Proje dizinine gidin:
    ```bash
    cd todo-list-app
    ```
3. Gerekli bağımlılıkları yükleyin (bu projede harici bir bağımlılık bulunmamaktadır):
    ```bash
    npm install
    ```
4. Projeyi çalıştırmak için bir tarayıcıda `index.html` dosyasını açın.

## Kullanım

1. **Yeni Görev Ekleme**: Yapılacaklar listesine yeni bir görev eklemek için metin kutusuna görevi yazın ve "Todo Ekleyin" butonuna tıklayın.
2. **Görevleri Listeleme**: Eklenen görevler otomatik olarak listeye eklenir.
3. **Görev Silme**: Görevi silmek için görev öğesinin sağındaki çöp kutusu ikonuna tıklayın.
4. **Tüm Görevleri Temizleme**: Tüm görevleri temizlemek için "Tüm Todoları Temizle" butonuna tıklayın.
5. **Görev Arama ve Filtreleme**: Görevleri aramak için arama kutusuna görevi yazın. Eşleşen görevler otomatik olarak filtrelenecektir.

## Teknik Detaylar

Bu proje, saf JavaScript, HTML ve CSS kullanılarak geliştirilmiştir. 

### JavaScript Kodları

- **index.html**: Uygulamanın temel HTML yapısını içerir.
- **app.js**: Uygulamanın tüm JavaScript işlevselliğini içerir.

### CSS

Proje, Bootstrap 4 ve bazı özel stil tanımlamaları kullanılarak tasarlanmıştır.

### JavaScript Fonksiyonları

- `pageLoaded()`: Sayfa yüklendiğinde çalışır ve yerel depolamadan görevleri getirir.
- `runEvents()`: Tüm olay dinleyicilerini başlatır.
- `addTodo()`: Yeni bir görev ekler.
- `addTodoToUI()`: Yeni görevi kullanıcı arayüzüne ekler.
- `addToDoStorage()`: Yeni görevi yerel depolamaya ekler.
- `checkToDosFromStorage()`: Yerel depolamadan görevleri kontrol eder.
- `showAlert()`: Uyarı mesajı gösterir.
- `filter()`: Görevleri filtreler.
- `allTodosDeleted()`: Tüm görevleri siler.
- `removeToDoToUI()`: Bir görevi kullanıcı arayüzünden kaldırır.
- `removeToDoToStorage()`: Bir görevi yerel depolamadan siler.
