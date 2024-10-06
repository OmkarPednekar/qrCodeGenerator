# Version 2 QR Code Generator with Error Correction

## Overview

This project is a Version 2 QR Code Generator built from scratch using React with Level L Reed-Solomon error correction. The QR code generator accepts text input, encodes it, and generates a QR code that can correct up to 11 bits flipped. The project includes manual matrix manipulation, polynomial division in Galois fields, and visual rendering of the QR code.

The inspiration for this project came from a video by Veritasium, and the implementation was made possible through insights from Thonky's QR Code Tutorial.

## Features

Version 2 QR Code Generation: Generates a QR code with a 25x25 matrix.
Level L Error Correction: Uses Reed-Solomon error correction to correct up to 11 bits flipped.
Matrix Manipulation & Zigzag Traversal: Implements matrix manipulation for QR code construction, including alignment patterns, timing patterns, and zigzag data filling.
Galois Field Arithmetic: Polynomial division in Galois fields is used to generate error correction codes.
Customizable Text Input: Users can input any text which is converted into a QR code.

## Demo

Here's how the QR code generator works:

Input text into the generator (e.g., "Hello, World!").
The input is encoded into a binary stream, then split into blocks.
Error correction codes are generated using Reed-Solomon encoding.
The generator constructs the QR matrix using various QR patterns (positioning markers, alignment patterns, timing patterns).
Data is filled into the matrix using a zigzag traversal pattern.
The final QR code is rendered as a grid, where black and white blocks represent data bits.
Math Breakdown
Reed-Solomon Error Correction: This error correction scheme ensures data reliability by appending error correction codes to the message. The message is treated as a polynomial, divided by a generator polynomial in Galois fields.

Error Correction Capability: With Level L error correction, the QR code can correct up to 11 bits flipped.
