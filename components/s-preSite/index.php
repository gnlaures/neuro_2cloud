<section class="s-preSite">
    <div class="u-container">
        <?php $cBrand = array(
            "modifiers" => "",
            "style" => "light",
            "href" => "home",
        );
        include('components/c-brand/index.php');
        ?>
        <div class="c-article">
            <h1>Em breve, um novo site incrível!</h1>
            <p>O novo site será lançado em breve! Fique atento ao nosso contador regressivo e não perca a inauguração,
                estamos trabalhando duro para trazer uma nova experiência online para você. Aguarde!</p>
        </div>
        <?php $cCountdown = array(
            "modifiers" => "",
            "date" => "Mar 10, 2024 17:44:20",
            "componentFeedback" => "components/c-countdown/feedback.php",
            "caption_days" => "Dias",
            "caption_hours" => "Horas",
            "caption_minutes" => "Minutos",
            "caption_seconds" => "Segundos",
        );
        include('components/c-countdown/index.php');
        ?>
        <?php $cSpacer = array(
            'modifiers' => ''
        );
        include('components/c-spacer/index.php');
        ?>
        <?php $cBtn = array(
            "modifiers" => "--primary --m --wpp js-openFormWhatsapp",
            "caption" => "Quero ser avisado no whatsapp
quando o site for lançado.",
            "tag" => ""
        );
        include('components/c-btn/index.php'); ?>
    </div>
</section>