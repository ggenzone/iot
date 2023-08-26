---
layout: post
title:  "Configuración de módulo bluetooth HC02"
date:   2022-11-01 09:15:43 +0000
categories: [bluetooth, arduino]
tags: [getting started]
---

Para configurar un módulo Bluetooth esclavo es necesario hacerlo por comandos `AT`. 



## Comunicación

Utiliza comunicación en serie `UART`. Asi que necesitaremos conectar sus pines `RX` y `TX` con pines `TX` y `RX` respectivamente. Se pueden utilizar los pines de comunicación en serie del Arduino tanto los del hardware o los que soporta SoftwareSerial.

## Pines

| Numero     | Nombre          | Descripción |
|:-----------|:----------------|--------:|
| 1          | Enable / Key    | Interruptor entre modo AT (HIGH) y modo transmisión de datos (LOW) |
| 2          | Vcc             | Connect to +5V/+3.3V Supply voltage  |
| 3          | Ground          | Ground   |
| 4          | TX Transmitter  | Recepción de datos |
| 5          | RX Receiver     | Envio de datos    |
| 6          | State           | Usado para comprobar el estado del modulo   |

## Conexión con Arduino

![diagrama](/media/config_bluetooth.png){: width="542" height="542"}

| Pin HC02     | Arduino UNO        | Arduino Mega |
|:-----------|:----------------|--------:|
| 1          | Enable / Key    | Interruptor entre modo AT (HIGH) y modo transmisión de datos (LOW) |
| 2          | Vcc             | Connect to +5V/+3.3V Supply voltage  |
| 3          | Ground          | Ground   |
| 4          | TX Transmitter  | Recepción de datos |
| 5          | RX Receiver     | Envio de datos    |
| 6          | State           | Usado para comprobar el estado del modulo   |

## Comandos AT

`AT+NAME`:

`AT+BAUD`:

`AT+PIN`:


## Código


```cpp
/**
 * Configuration for bluetooth as Slave, using Arduino UNO
 *
 * Hardware HC02, HC06
 *
 * Module RX    -->
 * Module TX    -->
 * Module VCC   -->
 * Module GND   -->
 * Module Reset -->
 */ 
const int LED   = 13;
const int BTPWR = 12;


/**
 * Serial baud rate table
 *
 * 1———1200
 * 2———2400
 * 3———4800
 * 4———9600 (Default)
 * 5———19200
 * 6———38400
 * 7———57600
 * 8———115200
 * 9———230400
 * A———460800
 * B———921600
 * C———1382400
 */
char baud         = '4';

/**
 * Connection details
 */
char name[15]     = "CustomSlaveName";
char password[6]  = "12345";


/**
 * Setting 
 *
 *   AT+NAME
 *   AT+BAUD
 *   AT+PIN
 */
void setup(){
    pinMode(LED, OUTPUT);
    pinMode(BTPWR, OUTPUT);

    digitalWrite(LED, LOW);
    digitalWrite(BTPWR, HIGH);

    Serial.begin(9600);

    Serial.print("AT");
    delay(500);

    Serial.print("AT+NAME");
    Serial.print(name);
    delay(500);

    Serial.print("AT+BAUD");
    Serial.print(baud);
    delay(500);

    Serial.print("AT+PIN");
    Serial.print(password);
    delay(500);

    // Setup complete it
    digitalWrite(LED, HIGH);
}

void loop(){
  
}
```

## Links

[Documentación](https://osoyoo.com/2018/07/13/hc-02-bluetooth-4-0-ble-slave-module-to-uart-transceiver-arduino-compatible-with-android-ios/)