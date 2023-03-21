function Kopiec(N) {
    //Utworzenie kopiec
    this.tab = new Array(N + 1);
	this.rozmiar = N;
    this.n = 0;
	this.siej_w_gore = function(i) {
		if (i == 1) return;
		let h = i / 2;  
		if (tab[i] <= tab[h]) return;
		let tmp = tab[i];
		tab[i] = tab[h];
		tab[h] = tmp;
		siej_w_gore(h);
	}
	this.drukuj = function() {
		let s = "[";
		for (var i = 1; i <= n; i++) {
			if (i > 1) s += ", ";
			s += tab[i];
		}
		s += "]";
		return s;
	}
}



function main(){


    var liczby;
    for(i=liczby; i<liczba13; i++)
    {
        liczby= document.getElementById("pole13").colSpan="13";
    }
   
   var liczba1 = document.getElementById("pole1").colSpan = "1";
   var liczba2 = document.getElementById("pole2").colSpan = "2";
   var liczba3 = document.getElementById("pole3").colSpan = "3";
   var liczba4 = document.getElementById("pole4").colSpan = "4";
   var liczba5 = document.getElementById("pole5").colSpan = "5";
   var liczba6 = document.getElementById("pole6").colSpan = "6";
   var liczba7 = document.getElementById("pole7").colSpan = "7";
   var liczba8 = document.getElementById("pole8").colSpan = "8";
   var liczba9 = document.getElementById("pole9").colSpan = "9";
   var liczba10 = document.getElementById("pole10").colSpan = "10";
   var liczba11 = document.getElementById("pole11").colSpan = "11";
   var liczba12 = document.getElementById("pole12").colSpan = "12";
   var liczba13 = document.getElementById("pole13").colSpan = "13";
   
       document.write(liczba1 + "<br />");
       document.writeln(liczba2);
       document.writeln(liczba3 + "<br />");
       document.writeln(liczba4);
       document.writeln(liczba5);
       document.writeln(liczba6);
       document.write(liczba7 + "<br />");
       document.writeln(liczba8);
       document.writeln(liczba9);
       document.writeln(liczba10);
       document.writeln(liczba11);
       document.writeln(liczba12);
       document.writeln(liczba13);
       
       //document.writeln(N);

 $('#strona').click(function(main){
   document.location.href="index.html" // link sieciowy do aktualnej wersji
 }
var tab = new Array[15];
Kopiec();
void insert_into(v);
void usun_korzen();
void wyswietl(poczatek);
void sort();
void largest();
function Kopiec(N){
//Konstruktor tworzący kopiec
    this.tab = new Array[N + 1];    
    this.rozmiar = N;
    this.n = 0;
    this.siej_w_gore=function(i) {
        if (i == 1) return;
        let h = i/2;
        if (tab[i] <= tab[h]) return;
        let tmp = tab[i];
        tab[i] = tab[h];
        tab[h] = tmp;
        siej_w_gore(h);
    }
    function siej_w_dol(i)
{
if(i > tab[s/2])
{
    return m =left(i);//lewy syn
}
    if (m + 1 <= n)
    {
    if (Kopiec[m+1] > Kopiec[m]);
    m++;
    }
    if (Kopiec[m] <= Kopiec[i])
    {
      Kopiec[i] = Kopiec[m];
    }
    return m;  
    siej_w_dol(m);
}       
    this.drukuj() 
            let s = "[";
            for (var i = 1;i <=n; i++) {
                    if (i > 1) s += ", ";
                    s += tab[i];
            }
            s += "]";
            return s;
        }
}
/*
let kop = new Kopiec(15);
//Wstawienie elementu kopca począwszy od pierwszego
    K.insert_into(1);
    K.insert_into(2);
    K.insert_into(3);
    K.insert_into(4);
    K.insert_into(5);
    //Wyświetlenie elementów kopca począwszy od pierwszego
    K.wyswietl(1);
    system("PAUSE");

    //Usunięcie korzenia i wyświetlenie elementów kopca począwszy od pierwszego
    K.usun_korzen()
    k.wyswietl(1);
    system("PAUSE");
    //Posortowanie kopca
    K.sort();

    system("PAUSE");
    return Udalo_sie;
}
*/
//Konstruktor tworzący pusty kopiec
Kopiec:kopiec();
rozmiar=0;

//wstawienie elementu o wartości v do kopca
function wstaw(v){
    if (Kopiec.n == Kopiec.rozmiar) throw new Error('pusty kopiec');
    Kopiec.n++;
    Kopiec.tab[Kopiec.n] = v;
    Kopiec.siej_w_gore(n);
}

function Kopiec_insert_into(v) {
    tab[rozmiar +1] = v;
    var s = rozmiar + 1;
    while (s!= 1) {
        if (tab[s/2] < tab[s]){
            swap(tab[s/2],tab[s]); s/=2;
        }
        else
            break;
    }
    rozmiar++;
}

//Przesiewanie w górę kopca
function sieve_up_iter(i)
{
    while(i > 1) {
    //if (i == 1) return;
	let h = i / 2;  
	if (Kopiec[i] <= Kopiec[h]) return;
	let tmp = Kopiec[i];
Kopiec[i] = Kopiec[h];
	Kopiec[h] = tmp;
    sieve_up(h);
    }
} 

//Przesiewanie w dół kopca
function sieve_down(v)
{
if(i > tab[s/2])
{
    return m=left(i);//lewy
} 
if(m+1 <= n)
{
 if(Kopiec [m+1] > Kopiec [m])
 m++;
}
if(Kopiec [m] <= Kopiec [i])
{
 Kopiec[i] = Kopiec [m];
}
return m;
sieve_down (m);
}

//Przesiewanie w dół kopca
function siej_w_dol(i)
{
if(i > tab[s/2])
{
    return m =left(i);//lewy syn
}
    if (m + 1 <= n)
    {
    if (Kopiec[m+1] > Kopiec[m]);
    m++;
    }
    if (Kopiec[m] <= Kopiec[i])
    {
      Kopiec[i] = Kopiec[m];
    }
    return m;  
    siej_w_dol(m);
}
//Wyciągnięcie elementu maksymalnego z kopca heap [1…n]-
//nadpisujemy pierwszy element kopca ostatnim i przesiewamy w dół
function extract_max()
{
    if (n == 0)
    {
     x=Kopiec[1];
    } 
    Kopiec[1]= Kopiec[n--];
    sieve_down(1);
    return x;
}
//Odczytanie elementu maksymalnego z kopca
function top(v) 
{
 if(n==0) throw Error("brak elementu maksymalnego");
 {
  return Kopiec[1];
 }
}
top(Kopiec[1]) 
//Usunięcie korzenia kopca
function Kopiec_usun_korzen()
    tablica[1] = tab[rozmiar];
    rozmiar--;
    var tmp=1;
    while(tmp*2 <= rozmiar){
        if (tab[tmp] < tab[tmp*2] || tab[tmp] < tab[tmp*2+1]){
            if (tab[tmp*2]> tab[tmp*2+1] || tmp*2+1 > rozmiar){
                swap(tab[tmp],tab[tmp*2]);
                tmp=tmp*2;
            }
                else{
                    swap(tab[tmp],tab[tmp*2+1]);
                    tmp=tmp*2+1;
                }
            }
            else
            break;
        }
    
    //Sortowanie kopca
    function Kopiec_sort()
        for( var i=0; i <=rozmiar; i++){
            wyswietl(tab[1]);
            usun_korzen();
        }
        wyswietl(tab[1]);

    // Wyświetlenie zawartości kopca począwszy od elementu początkowego
   function Kopiec_wyswietl(poczatek)
   
        if (poczatek <= rozmiar) {
            wyswietl(poczatek, " : ", tab[poczatek]);
            if (poczatek*2 <=rozmiar) wyswietl(poczatek*2);
            if (poczatek*2+1 <= rozmiar) wyswietl(poczatek*2+1);
        }
    function Kopiec_largest(Kopiec, i)// Max-hapify- funkcja utrzymująca własności kopca typu max
    {
        m = left(i);
        r = right(i+1);
        var largest = i;
        if (m <= rozmiar(Kopiec) && Kopiec[1] > Kopiec[i])
        {
            largest=1;
        }
        if (r<= rozmiar(Kopiec) && Kopiec[r] > Kopiec[largest])
        {
            largest=r;
        }
        if (largest != i)
        {
            swap(Kopiec[i], Kopiec[largest]);// zamienić największą wartość z wartością pod indeksem i
            Kopiec_largest(Kopiec, largest);
        }
    }    

    function showMe() {
        console.log(this);
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        element.addEventListener("mousedown", showMe);
        element.addEventListener("mouseup", showMe);
        element.addEventListener("click", showMe);
    });
    
    