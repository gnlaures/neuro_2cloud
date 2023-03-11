<div class="c-formWhatsapp">
    <div class="c-formWhatsapp__hero">
        <div class="c-formWhatsapp__close js-closeFormWhatsapp">
            <?php include('media/icons/icon_close.svg');?>
        </div>
        <div class="u-container">
            <form action="#" class="c-form" id="form__boilerplate">
                <fieldset>
                    <legend>Lorem Ipsum</legend>
                    <div class="c-form__hero">
                        <div class="c-form__group u-fw100">
                            <div class="c-field u-fw100 --default">
                                <div class="c-field__head">
                                    <label for="form__boilerplate__iptText">Nome*</label>
                                </div>
                                <div class="c-field__content">
                                    <input type="text" placeholder="Nome" id="form__boilerplate__iptText">
                                </div>
                            </div>
                            <div class="c-field u-fw100 --default">
                                <div class="c-field__head">
                                    <label for="form__boilerplate__iptNum">Whatsapp</label>
                                </div>
                                <div class="c-field__content">
                                    <input type="tel" placeholder="Whatsapp" id="form__boilerplate__iptNum">
                                </div>
                            </div>
                            <div class="c-field u-fw100 --default">
                                <div class="c-field__content">
                                    <?php $cBtn = array(
                                        "modifiers" => "--primary --m --primary",
                                        "caption" => "Enviar",
                                        "tag" => "button"
                                    );
                                    include('components/c-btn/index.php'); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="c-form__feedback"></div>
            </form>
        </div>
    </div>
    <div class="c-formWhatsapp__mask js-closeFormWhatsapp"></div>
</div>