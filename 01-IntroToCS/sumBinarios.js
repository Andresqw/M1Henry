//Tablas de suma de Binarios

/* 
A  B  AND  <-- carry 
1  1   1
1  0   0
0  0   0
0  1   0
*/

/* 
A  B  XOR  <--- Suma 
1  1   0
1  0   1
0  0   0
0  1   1
*/

//    1   <_ acarreo (Me llevo)
//    17
//+    7
//---------
//     4


//Ejemplo clase

//Binarios       Decimales
//  1 1 0        -> 6
//  1 0 0        -> 4
// ------
// 1 0 1 0        -> 10

/*
pos   3    2     1     0
      1    0     0     1  <- impar
    2**3  2**2  2**1  2**0
      8 +  0  +  0  +  1
    
    = 9
 */