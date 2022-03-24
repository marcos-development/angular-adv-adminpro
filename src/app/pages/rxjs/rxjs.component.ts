import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, pipe, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {
    
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: valor => console.log('subs:', valor),
    //   error: err => console.warn('Error:', err),
    //   complete: () => console.info('obs terminado')
    // });

    this.intervalSubs = this.retornaIntervalo().subscribe( console.log );

  }
  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo() {

    const intervalo$ = interval(100)
                          .pipe(
                            map( valor => valor + 1 ),
                            filter( value => value % 2 === 0 )
                          )


    // ------------------------------------------------

    // Es importante el orden de las funciones
    // resp: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    // const intervalo$ = interval(100)
    //                       .pipe(
    //                         map( valor => valor + 1 ),
    //                         filter( value => value % 2 === 0 ), // si es false no llega al take
    //                         take(10),
    //                       )
    
    // resp: 2, 4, 6, 8, 10
    // const intervalo$ = interval(100)
    //                       .pipe(
    //                         take(10),
    //                         map( valor => valor + 1 ),
    //                         filter( value => value % 2 === 0 ),
    //                       )

    return intervalo$

  }

  retornaObservable(): Observable<number> {

    let i = 0;
    
    return new Observable<number>( observer => {

      const intervalo = setInterval(() => {

        i++;
        observer.next(i)
        
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }

      }, 1000);

    });

  }

}
