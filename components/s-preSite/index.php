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
            <p>O novo site será lançado em breve!</p>
        </div>
        <?php include('components/c-typingBox/index.php');?>
        <?php $cCountdown = array(
            "modifiers" => "",
            "date" => "Jul 04, 2023 23:59:59",
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
            "modifiers" => "--primary --m --primary",
            "caption" => "Quero ser avisado no whatsapp
quando o site for lançado.",
            "tag" => "a",
            "href" => "https://www.2cloud.com.br/lp-whatsapp",
            "a_title" => "Quero acompanhar novidades",
        );
        include('components/c-btn/index.php'); ?>
    </div>
</section>