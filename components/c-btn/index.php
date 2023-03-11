<?php
//    $cBtn = array(
//        "modifiers" => "--primary --l",
//        "caption" => "Call To Action",
//        "icon" => "media/icons/icon_attach.svg",
//        "tag" => "a",
//        "href" => "#",
//        "a_title" => "#",
//    );
    $cBtn__iconStructure = '<div class="c-btn__icon">' . (empty($cBtn["icon"]) ? "" : file_get_contents($cBtn["icon"])) . '</div>';
    $cBtn__structure = '<div class="c-btn__hero"><div class="c-btn__caption">'. $cBtn["caption"] .'</div>'. (empty($cBtn["icon"]) ? "" : "$cBtn__iconStructure") .'</div>';
?>

<?php if ($cBtn["tag"] === "a") { ?>
    <a href="<?php echo $cBtn["href"] ?>" title="<?php echo $cBtn["a_title"] ?>" class="c-btn <?php echo $cBtn["modifiers"] ?>">
        <?php echo $cBtn__structure ?>
    </a>
<?php } else if ($cBtn["tag"] === "button") { ?>
    <button class="c-btn <?php echo $cBtn["modifiers"] ?>">
        <?php echo $cBtn__structure ?>
    </button>
<?php } else { ?>
    <div class="c-btn <?php echo $cBtn["modifiers"] ?>">
        <?php echo $cBtn__structure ?>
    </div>
<?php } ?>