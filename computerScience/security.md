1. How to store password in Database securely?
   We can use slow hash + salt + pepper to store password.

- Slow hash will slow down the hashing speed when hackers use a strong computer. For example: bcrypt, scrypt
- salt is a unique, randomly generated string that is added to each password as part of the hashing process. Salt is stored in database
- Pepper is randomly generated string but is not stored in database (env variable, secure centralized store). It is shared between all passwords rather than being unique like a salt.

2. Symmetric vs Asymmetric encryption?
   Symmetric has both side(sender and receiver) share the <b>same key</b> to encrypt/decrypt the text fast

   Asymmetric (aka public key cryptography). If public key used for encryption, private key will be used for decryption and otherwise. It's slow

- For example: RSA
