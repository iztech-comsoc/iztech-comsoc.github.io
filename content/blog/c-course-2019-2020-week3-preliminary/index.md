---
title: C Course 2019-2020 - Fonksiyonlar ve Arrayler (Ön Bilgi) (Turkish)
date: 2019-11-26T15:09:30+0000
description: C Course 2019-2020 - Fonksiyonlar ve Arrayler (Ön Bilgi) (Turkish)
---

## Fonksiyonlar
Fonksiyonlar, düzenli ve tekrar kullanılabilir belli bir işlemi gerçekleştiren kod bloklarıdır.
Bunları matematikteki fonksiyonlara benzetmemiz yanlış olmaz. Temelinde aynı mantık yatmaktadır.

Örnek olarak aşağıdaki fonksiyonu ele alalım.


$f(x,y) = x + y + 1$, &nbsp;&nbsp;&nbsp;&nbsp; $f: \Z^2 \Rightarrow \Z$


$f(x,y)$ fonksiyonun tanım kümesi $\Z^2$, görüntü kümesi ise $\Z$. 
Yaptığı işlem ise tam sayılar kümesinde tanımlı iki değişken olan $x$ ile $y$'nin toplamının 1 fazlası.


Biz bu fonksiyonu C'de aşağıdaki şekilde ifade edebiliriz. 
```C
    int sum(int x, int y) {
        return x + y + 1;
    }
```

Fonkisyonumuz __int__ türündeki x değişkeni ile __int__ türünde y değişikenin 1 fazlasını döndürüyor. Dönen değer yine __int__ olduğu için __int sum__ yazdık. 


Başka bir örnek olarak aşağıdaki fonksiyonu C'de yazalım. Geçersiz değer girildiğinde de sonuç olarak __-1__ döndürelim.

$g(x,y) = x / y$, &nbsp;&nbsp;&nbsp;&nbsp; $g: \N \times \N^+ \rightarrow \R^+$

```C
    double div(int x, int y) {
        if (x < 0 || y <= 0) return -1;
        return ((double) x) / y;
    }
```

__Not:__ Sonsuz sayıda değeri bilgisayarda tutamayacağımız için en yakın veri tipini seçtik.

__Not 2:__ `unsigned int` kullanmadık çünkü hatalara yol açabiliyor. (int yerine unsigned int yazıp, negatif değerlerin sonuçlarını printf ile yazdırabilirsin.)


Kendiniz de aşağıdaki fonksiyonun ne yaptığını ve neden __void__ tipinde olduğunu anlamaya çalışın.
```C
    void f(int i) {
        for (int j = 0; j < i; j++) {
            printf("*");
        }
    }
```

## Arrayler
Array, önceden belirlenmiş sayıda aynı tipten veriyi bir arada tutabilen veri tipidir.

Örnek olarak şöyle bir int arrayi oluşturalım.
```C
    int my_array[9] = {40, 55, 63, 17, 22, 68, 89, 97, 89};

```

Hafızada nasıl tutulduğunu anlamak için görselleştirirsek şöyle bir görsel çıkacak.

![1d array](https://media.geeksforgeeks.org/wp-content/uploads/Arrays1.png)

Arrayimizi tanımlarken boyutunun 9 olduğunu __[9]__ diyerek belirtmiştik. Fakat ifadenin sağında açıkca yazdığımız için doğrudan __[]__ desek de olur.

Ayrıca dikkatinizi çekmiştir ki indis diye bir tabir geçiyor ve bu ifade elemanlarımızı saymaya 0'dan başlıyor. Bunun sonucu `my_array[1]` dediğimizde ikinci elemana ulaşıyoruz.

Örnek olarak ilk elemanın değerini 1234 yapmak istersek de `my_array[0] = 1234` diye yazıyoruz.
