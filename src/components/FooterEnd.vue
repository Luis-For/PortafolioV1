<template>
<footer class="footer">
    <div class="footer-content">
        <p class="footer-quote">"Si el código no te hace reír, es que no lo he optimizado todavía."</p>
        <div class="footer-links">
            <a href="mailto:luisfor90@gmail.com" class="footer-link">
                <span class="icon-wrapper">
                    <img src="../assets/images/icons8-gmail-100.png" alt="Email">
                </span>
                luisfor90@gmail.com
            </a>
            <a href="https://github.com/Luis-For" target="_blank" class="footer-link">
                <span class="icon-wrapper">
                    <img src="../assets/images/git-icon-logo-svgrepo-com.svg" alt="Github">
                </span>
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/luis-%C3%A1ngel-fornaris-rodr%C3%ADguez-2146561a2/" target="_blank" class="footer-link">
                <span class="icon-wrapper">
                    <img src="../assets/images/linkedin-svgrepo-com.svg" alt="Linkedin">
                </span>
                LinkedIn
            </a>
        </div>
        <p class="footer-cta">¿Listo para crear algo increíble juntos? <strong>¡Hablemos!</strong></p>
    </div>
</footer>
</template>

<script>
export default {
    name: 'FooterPortfolio'
}
</script>

<style scoped>
.footer {
    background-color: #1A1A1A;
    color: #F0F0F0;
    padding: 3rem 1rem;
    text-align: center;
    border-top: 1px solid #3498DB;
}

.footer-content {
    max-width: 800px;
    margin: 0 auto;
}

.footer-quote {
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #3498DB;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.footer-link {
    color: #F0F0F0;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.footer-link:hover {
    color: #1ABC9C;
}

.icon-wrapper {
    display: inline-flex;
    width: 20px;
    height: 20px;
}

.icon-wrapper svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

.footer-cta {
    font-size: 1.1rem;
    margin-top: 1rem;
}

.footer-cta strong {
    color: #E67E22;
}

@media (max-width: 600px) {
    .footer-links {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    .footer {
        padding: 2rem 1rem;
    }
}
</style>
