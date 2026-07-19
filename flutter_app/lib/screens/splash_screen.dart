import 'package:flutter/material.dart';
import 'dart:async';
import 'login_screen.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    
    // Basit bir saydamlık (fade) animasyonu
    _controller = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0.0, end: 1.0).animate(_controller);
    _controller.forward();

    // 3 saniye sonra giriş ekranına yönlendir
    Timer(const Duration(seconds: 3), () {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const LoginScreen()),
      );
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0C973E), // Görseldeki yeşil tona yakın bir renk
      body: Center(
        child: FadeTransition(
          opacity: _animation,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Logo İkonu Kutusu
              Container(
                width: 100,
                height: 100,
                decoration: BoxDecoration(
                  color: const Color(0xFF43B96A), // İkonun arkasındaki açık yeşil ton
                  borderRadius: BorderRadius.circular(24),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1),
                      blurRadius: 10,
                      offset: const Offset(0, 5),
                    )
                  ]
                ),
                child: const Icon(
                  Icons.eco_outlined, // Yaprak ikonuna en yakın standart ikon
                  color: Colors.white,
                  size: 60,
                ),
              ),
              const SizedBox(height: 24),
              
              // Başlık
              const Text(
                'AgriTrade',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 36,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              
              // Alt Başlık
              const Text(
                'Tarladan Sofraya, Güvenle.',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
              ),
              const SizedBox(height: 48),
              
              // Üç Nokta İndikatörü
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  _buildDot(),
                  const SizedBox(width: 8),
                  _buildDot(),
                  const SizedBox(width: 8),
                  _buildDot(),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildDot() {
    return Container(
      width: 10,
      height: 10,
      decoration: const BoxDecoration(
        color: Colors.white,
        shape: BoxShape.circle,
      ),
    );
  }
}
