1. How to store password in Database securely?
   We can use slow hash + salt + pepper to store password.

- Slow hash will slow down the hashing speed when hackers use a strong computer. For example: bcrypt, scrypt
- salt is a unique, randomly generated string that is added to each password as part of the hashing process. Salt is stored in database
- Pepper is randomly generated string but is not stored in database (env variable, secure centralized store). It is shared between all passwords rather than being unique like a salt.

2. Symmetric vs Asymmetric encryption?

- Symmetric has both side(sender and receiver) share the <b>same key</b> to encrypt/decrypt the text fast

- Asymmetric (aka public key cryptography). If public key used for encryption, private key will be used for decryption and otherwise. It's slow

- For example: RSA

3. How RSA work?

- The sender and the receiver use different keys to encrypt or decrypt a message or transmission.
- Both sides of the message are assigned a pair of keys; a public key and a private key. The public key is what will be used to encrypt the message. The private key is for decrypting the message. The public key remains available to view by anyone who might wish to send a message. However, only the private key can decrypt the sent messages. While both keys are derived from factoring large prime numbers, the private key can not be derived from the public key.

4. How HTTPS work?
   https://howhttps.works/

5. What happen during TLS Handshake?
6. Why use symmetric encryption for exchanging data instead of asymmetric encryption?
7. What is the use of client random and server random in TLS handshake?
8. What is CORS?
9. How to prevent SQL injection?
10. How do you implement authentication?
11. How JWT work? Pros & Cons? How to revoke JWT from server?
12. 2 users in diff location login with same JWT, how to warn user?
13. Access token vs Refresh token
14. https://github.com/alex/what-happens-when
15. Hashing vs Encoding vs Encryption? When to use each of them?
