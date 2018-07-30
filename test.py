#!/usr/bin/env python
import sys

if len(sys.argv) != 3:
   print ("Parametros incorrectos")
   exit(0)

a=sys.argv[1]
b=sys.argv[2]
RESP = "Hola "+ a + " Bienvenido a "+b

print (RESP)
