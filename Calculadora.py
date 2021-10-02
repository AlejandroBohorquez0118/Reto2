from operaciones import *

print("Calculadora para bobos")
print()
print("1). SUMAR")
print("2). RESTAR")
print("3). MULTIPLICAR")
print("4). DIVIDIR")
print("5). ELEVAR A LA POTENCIA")

op = int(input("Digite un a opcion: "))
n1 = int(input("Digite un numero: "))
n2 = int(input("Digite un otro numero: "))
res = None
if op == 1:
    res = sumar(n1, n2)


print("Resultado:", res)
