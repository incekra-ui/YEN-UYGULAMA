import 'package:firebase_auth/firebase_auth.dart';

class AuthService {
  // FirebaseAuth instance'ını kullanabilmek için projenizde firebase_core başlatılmış olmalı
  // final FirebaseAuth _auth = FirebaseAuth.instance;

  // E-posta & Şifre ile Giriş
  Future<User?> signInWithEmailAndPassword(String email, String password) async {
    try {
      // UserCredential result = await _auth.signInWithEmailAndPassword(
      //     email: email, password: password);
      // return result.user;
      return null;
    } catch (e) {
      print(e.toString());
      return null;
    }
  }

  // Çıkış Yap
  Future<void> signOut() async {
    try {
      // return await _auth.signOut();
    } catch (e) {
      print(e.toString());
      return null;
    }
  }
}
