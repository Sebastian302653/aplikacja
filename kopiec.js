function Kopiec(N) {
    //Utworzenie kopiec
    this.tab = new Array(N + 1);
	this.rozmiar = N;
    this.n = 0;
	this.siej_w_gore = function(i) {
		if (i <= 1) return;
		var h = parseInt(i / 2); // ojciec 
		if (this.tab[i] <= this.tab[h]) return;
		var tmp = this.tab[i];
		this.tab[i] = this.tab[h];
		this.tab[h] = tmp;
		this.siej_w_gore(h);
	}
    this.siej_w_dol = function(i) {
		if(i > parseInt(this.n / 2)) return;
		let m = i * 2; // lewy syn
		if (m + 1 <= this.n) { // prawy syn o ile istnieje
			if (this.tab[m + 1] > this.tab[m]);
			m++;
		}
		if (this.tab[m] <= this.tab[i]) return;  
		let tmp = this.tab[i];
		this.tab[i] = this.tab[m];
		this.tab[m] = tmp;
		this.siej_w_dol(m);
	}       
	//Przesiewanie w górę kopca
	this.sieve_up_iter = function(i) {
		while(i > 1) {
			if (i == 1) return;
			let h = i / 2;  
			if (tab[i] <= tab[h]) return;
			let tmp = tab[i];
			tab[i] = tab[h];
			tab[h] = tmp;
			i = h;
		}
	} 
	this.drukuj = function() {
		let s = "[";
		for (var i = 1; i <= this.n; i++) {
			if (i > 1) s += ", ";
			s += this.tab[i];
		}
		s += "]";
		return s;
	}
	//wstawienie elementu o wartości v do kopca
	this.wstaw = function(v) {
		if (this.n == this.rozmiar) throw new Error('pełny kopiec');
		this.tab[++this.n] = v;
		this.siej_w_gore(this.n);
	}
	//Wyciągnięcie elementu maksymalnego z kopca heap [1…n]-
	//nadpisujemy pierwszy element kopca ostatnim i przesiewamy w dół
	this.usuń_maks = function() {
		if (this.n == 0) throw new Error('pusty kopiec');
		let x = this.tab[1];
		this.tab[1]= this.tab[this.n--];
		this.siej_w_dol(1);
		return x;
	}
	//Odczytanie elementu maksymalnego z kopca
	this.maks = function() { 
		if (this.n == 0) throw new Error('pusty kopiec');
		return this.tab[1];
	}
	//Sprawdzenie czy kopiec jest pusty
	this.pusty = function(){
		return this.n == 0;
	}
	//Odczytanie elementu z i-tej pozycji
	this.ity = function(i) {
		if (i < 1 || i > this.n) return null;
		return this.tab[i];
	}
	//Sortowanie elementów kopca
	this.sort = function() {
		let k = this.n;
		let j = k;
		while (! this.pusty()) {
			this.tab[j--] = this.usuń_maks();
		}
		this.n = k;
	}
	//Przywrócenie właściwości kopca
	this.buduj = function(){
		for (var i = parseInt(this.n / 2); i>0; i--)
		this.siej_w_dol(i);
	}
}
