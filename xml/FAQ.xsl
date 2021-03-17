<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <!-- Font Awesome CDN -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>

        <!-- Ionicon -->
        <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'/>

        <link rel="stylesheet" href="../css/FAQ.css"/>
        <link rel="stylesheet" href="../css/navbar.css"/>
        <link rel="stylesheet" href="../css/footer.css"/>
        <link rel="stylesheet" href="../css/main.css"/>
      </head>
      <body>
        <nav class="nav-active">
          <ul class="menu">
            <li class="logo">
              <a href="#">Exam Cell Automation</a>
            </li>
            <li class="item">
              <a href="#">About Us</a>
            </li>
            <li class="item">
              <a href="../index.html">Login</a>
            </li>
            <li class="toggle">
              <a href="#">
                <i class="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </nav>

        <section class="container">
          <h3 class="faq-title">Frequently asked questions</h3>

          <div class="accordion">
            <xsl:for-each select="questionList/question">
              <div class="accordion-item">
                <a class="question">
                  <xsl:value-of select="questionText"/>
                </a>
                <div class="content">
                  <p>
                    <xsl:value-of select="answer"/>
                  </p>
                </div>
              </div>
            </xsl:for-each>
          </div>
        </section>

        <footer class="footer__distributed">
          <div class="footer__left">
            <h3>Exam Cell Automation</h3>
            <p class="footer__links">
              <a href="#">About</a>
                |
              <a href="#">Contact</a>
                |
              <a href="#">FAQ</a>
                |
            </p>

            <p class="footer__company_name">&#169; 2021 Exam Cell Automation </p>
          </div>

          <div class="footer__center">
            <div>
              <i class="fas fa-phone"></i>
              <p>+91 22-27782183</p>
            </div>
            <div>
              <i class="fas fa-envelope"></i>
              <p>
                <a href="mailto:support@eca.com">support@eca.com</a>
              </p>
            </div>
          </div>

          <div class="footer__right">
            <p class="footer__company_about">
              <span>About the company</span>
                We aim to bring in a centralized system that will ensure the activities in the context of an examination
                that can be effectively managed.
            </p>
            <div class="footer__icons">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </footer>


        <script src="../javascript/navbar.js"></script>
        <script src="../javascript/FAQ.js"></script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

