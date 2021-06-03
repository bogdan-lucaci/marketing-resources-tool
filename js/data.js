//var folder = "http://demo.smart2pay.com/HppMerchant/_marketing/S2P_logo/";
/*
var folder = 'img/';

$.ajax({
    url : folder,
    crossDomain: false,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("body").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});
*/

let _DATA = [
    [
        'Logo',
        {
            filters: ['file', 'width', 'height', 'dpi', 'format'],
            images: [
                {
                    file: 's2p_logo_purple_bkg.eps',
                    width: -1,
                    height: -1,
                    dpi: -1
                },
                {
                    file: 's2p_logo_purple_bkg_1000x260_300dpi.png',
                    width: 1000,
                    height: 260,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_150x39_96dpi.gif',
                    width: 150,
                    height: 39,
                    dpi: 96
                },
                {
                    file: 's2p_logo_purple_bkg_240x240_300dpi.png',
                    width: 240,
                    height: 240,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_250x65_300dpi.png',
                    width: 250,
                    height: 65,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_255x255_300dpi.png',
                    width: 255,
                    height: 255,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_255x255_300dpi_v2.png',
                    width: 255,
                    height: 255,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_255x66_300dpi.png',
                    width: 255,
                    height: 66,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_300x100_300dpi.png',
                    width: 300,
                    height: 100,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_5000x1300_300dpi.png',
                    width: 5000,
                    height: 1300,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_500x130_300dpi.png',
                    width: 500,
                    height: 130,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_512x512_300dpi.png',
                    width: 512,
                    height: 512,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_bkg_reverted_150x39_96dpi.gif',
                    width: 150,
                    height: 39,
                    dpi: 96
                },
                {
                    file: 's2p_logo_purple_inverted_1000x258_300dpi.png',
                    width: 1000,
                    height: 258,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_inverted_240x240_300dpi_transparent.png',
                    width: 240,
                    height: 240,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_inverted_250x65_300dpi.png',
                    width: 250,
                    height: 65,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_inverted_255x255_300dpi_transparent.png',
                    width: 255,
                    height: 255,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_inverted_5000x1290_300dpi.png',
                    width: 5000,
                    height: 1290,
                    dpi: 300
                },
                {
                    file: 's2p_logo_purple_inverted_500x129_300dpi.png',
                    width: 500,
                    height: 129,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_1000x168_300dpi.png',
                    width: 1000,
                    height: 168,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_150x26_96dpi.png',
                    width: 150,
                    height: 26,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_250x42_300dpi.png',
                    width: 250,
                    height: 42,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_255x255_300dpi.png',
                    width: 255,
                    height: 255,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_255x43_300dpi.png',
                    width: 255,
                    height: 43,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_5000x840_300dpi.png',
                    width: 5000,
                    height: 840,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_500x500_300dpi.png',
                    width: 500,
                    height: 500,
                    dpi: 300
                },
                {
                    file: 's2p_logo_transparent_bkg_500x84_300dpi.png',
                    width: 500,
                    height: 84,
                    dpi: 300
                },
                {
                    file: 's2p_logo_white_bkg_150x26_96dpi.gif',
                    width: 150,
                    height: 26,
                    dpi: 96
                },
                {
                    file: 's2p_logo_white_bkg_255x255_300dpi.png',
                    width: 255,
                    height: 255,
                    dpi: 96
                },
                {
                    file: 's2p_logo_white_bkg_255x255_300dpi.png',
                    width: 255,
                    height: 255,
                    dpi: 96
                },
                {
                    file: 's2p_logo_white_bkg_500x500_300dpi.png',
                    width: 500,
                    height: 500,
                    dpi: 300
                },
                {
                    file: 's2p_sqaure_logo_240x240.png',
                    width: 240,
                    height: 240,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_255x255.png',
                    width: 255,
                    height: 255,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_16x16.png',
                    width: 16,
                    height: 16,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_32x32.png',
                    width: 32,
                    height: 32,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_460x460.png',
                    width: 460,
                    height: 460,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_150x150.png',
                    width: 150,
                    height: 150,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_192x192.png',
                    width: 192,
                    height: 192,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_512x512.png',
                    width: 512,
                    height: 512,
                    dpi: 300
                },
                {
                    file: 's2p_square_logo_57x57.png',
                    width: 57,
                    height: 57,
                    dpi: 300
                },
                {
                    file: 's2p-logo-purple-bkg.svg',
                    width: -1,
                    height: -1,
                    dpi: -1
                },
                {
                    file: 's2p-logo-white-bkg.svg',
                    width: -1,
                    height: -1,
                    dpi: -1
                },
                {
                    file: 's2p_square_logo_icon.ico',
                    width: 32,
                    height: 32,
                    dpi: 72
                },
                
            ]
        }
    ],
    [
        'Prints',
        {
            filters: ['format'],
            images: [
                {
                    file: 'high_level_diagram_042_FINAL.png',
                    name: 'High Level Diagram'
                },
                {
                    file: 'marketplace_setup_A4_v003.png',
                    name: 'Marketplace Highlights'
                },                
                {
                    file: 'marketplace_setup_A4_v003.pdf',
                    name: 'Marketplace Highlights'
                },
                {
                    file: 'marketplace_setup_A4_v003.docx',
                    name: 'Marketplace Highlights'
                },
                {
                    file: 'flyer_v4_update_2019-08-28.jpg',
                    name: 'Smart2Pay Flyer'
                },
                {
                    file: 'cards_v043_FINAL.png',
                    name: 'Smart Cards System Overview'
                },
                {
                    file: 'smart_cards_technology_stack_2018-09-27.png',
                    name: 'SmartCards Technology Stac'
                },
            ]
        }
    ],
    [
        'GP Logos',
        {
            filters: ['id', 'name', 'file', 'format', 'active'],
/*            
	DECLARE @a AS varchar(20) = '{"id":"';
	DECLARE @b AS varchar(20) = '" , "name":"';
	DECLARE @c AS varchar(20) = '", "file":"';
	DECLARE @d AS varchar(20) = '", "active":"';
	DECLARE @z AS varchar(20) = '" },';
	SELECT 
	@a + CONVERT(varchar, ID) + 
	@b + CONVERT(varchar(50), DisplayName) + 
	@c + REPLACE (CONVERT(varchar(100), LogoURL), 'images/Logos/Methods/', '') + 
	@d + CONVERT(varchar(20), Active) + @z 
	FROM Methods
*/            
            images: [
                {"id":"1" , "name":"Bank Transfer", "file":"bank_transfer_logo_v5.gif", "active":"1" },
                {"id":"2" , "name":"iDEAL", "file":"ideal.jpg", "active":"1" },
                {"id":"3" , "name":"Bancontact", "file":"0003_MrCash.gif", "active":"1" },
                {"id":"4" , "name":"Giropay", "file":"giropay.gif", "active":"1" },
                {"id":"5" , "name":"EPS", "file":"0005_eps.gif", "active":"1" },
                {"id":"6" , "name":"SmartCards", "file":"0006_smartcards.jpg", "active":"1" },
                {"id":"8" , "name":"UseMyFunds", "file":"umb.gif", "active":"0" },
                {"id":"9" , "name":"Pay now", "file":"0009_sofort.gif", "active":"1" },
                {"id":"12" , "name":"Przelewy24", "file":"p24.gif", "active":"1" },
                {"id":"13" , "name":"OneCard", "file":"onecard.gif", "active":"1" },
                {"id":"14" , "name":"CashU", "file":"cashu.gif", "active":"0" },
                {"id":"18" , "name":"POLi", "file":"poli.gif", "active":"1" },
                {"id":"19" , "name":"PayU", "file":"0019_PayU.gif", "active":"1" },
                {"id":"20" , "name":"Multibanco SIBS", "file":"sibs_mb.gif", "active":"1" },
                {"id":"22" , "name":"Moneta Wallet", "file":"moneta_v2.gif", "active":"0" },
                {"id":"23" , "name":"Paysera", "file":"paysera.gif", "active":"1" },
                {"id":"24" , "name":"Alipay", "file":"0024_alipay.gif", "active":"1" },
                {"id":"25" , "name":"Abaqoos", "file":"abaqoos.gif", "active":"0" },
                {"id":"27" , "name":"ePlatby for eKonto", "file":"eKonto.gif", "active":"1" },
                {"id":"28" , "name":"Ukashs", "file":"ukash.gif", "active":"0" },
                {"id":"29" , "name":"Trustly", "file":"trustly.png", "active":"1" },
                {"id":"32" , "name":"Débito Banco do Brasil", "file":"banco_do_brasil.jpg", "active":"1" },
                {"id":"33" , "name":"CuentaDigital", "file":"cuentadigital.gif", "active":"0" },
                {"id":"34" , "name":"CardsBrazil", "file":"cards_brl.gif", "active":"0" },
                {"id":"35" , "name":"PaysBuy", "file":"paysbuy.gif", "active":"0" },
                {"id":"36" , "name":"Mazooma", "file":"mazooma_2014-09-16.gif", "active":"0" },
                {"id":"37" , "name":"eNETS Debit", "file":"enets.gif", "active":"1" },
                {"id":"38" , "name":"PostFinance", "file":"postfinance.gif", "active":"0" },
                {"id":"40" , "name":"Paysafecard", "file":"paysafecard.gif", "active":"1" },
                {"id":"42" , "name":"PayPalOLD", "file":"paypal.gif", "active":"0" },
                {"id":"43" , "name":"PagTotal", "file":"pagtotal.jpg", "active":"0" },
                {"id":"44" , "name":"Payeasy", "file":"payeasy.gif", "active":"1" },
                {"id":"46" , "name":"MercadoPago", "file":"mercadopago.gif", "active":"1" },
                {"id":"47" , "name":"Mozca", "file":"mozca.jpg", "active":"0" },
                {"id":"48" , "name":"Gash", "file":"gash.gif", "active":"0" },
                {"id":"49" , "name":"ToditoCash", "file":"0049_todito_cash.gif", "active":"1" },
                {"id":"52" , "name":"SecureVaultPayments", "file":"secure_vault.gif", "active":"0" },
                {"id":"58" , "name":"PayWithMyBank", "file":"0058_pay_with_my_bank.gif", "active":"1" },
                {"id":"62" , "name":"Tenpay", "file":"tenpay.gif", "active":"0" },
                {"id":"63" , "name":"TrustPay", "file":"0063_TrustPay.gif", "active":"0" },
                {"id":"64" , "name":"MangirKart", "file":"mangir_kart.gif", "active":"0" },
                {"id":"65" , "name":"Finnish Banks", "file":"paytrail.gif", "active":"1" },
                {"id":"66" , "name":"MTCPay", "file":"mtcpay.gif", "active":"1" },
                {"id":"67" , "name":"DragonPay", "file":"dragonpay.jpg", "active":"1" },
                {"id":"69" , "name":"Cards", "file":"s2pcards.jpg", "active":"1" },
                {"id":"71" , "name":"INTERAC ® Online", "file":"interac-online.gif", "active":"1" },
                {"id":"72" , "name":"PagoEfectivo", "file":"pagoefectivo.gif", "active":"0" },
                {"id":"73" , "name":"MyBank", "file":"mybank.gif", "active":"1" },
                {"id":"74" , "name":"Yandex Money", "file":"yandex_money.gif", "active":"1" },
                {"id":"75" , "name":"Klarna Invoice", "file":"0075_klarna_invoice.gif", "active":"0" },
                {"id":"76" , "name":"Bitcoin", "file":"bitcoin.gif", "active":"0" },
                {"id":"77" , "name":"VoguePay", "file":"voguepay.gif", "active":"1" },
                {"id":"78" , "name":"Skrill", "file":"0078_skrill.gif", "active":"1" },
                {"id":"79" , "name":"Pay by mobile", "file":"pay_by_mobile_v1.gif", "active":"1" },
                {"id":"81" , "name":"WebMoney Transfer", "file":"webmoney.gif", "active":"1" },
                {"id":"83" , "name":"UnionPay", "file":"0083_Unionpay.gif", "active":"1" },
                {"id":"84" , "name":"SepaDD", "file":"0084_SepaDD.gif", "active":"1" },
                {"id":"87" , "name":"VTC Pay", "file":"0087_VTCPay.gif", "active":"1" },
                {"id":"89" , "name":"GPay", "file":"0089_GPay.gif", "active":"0" },
                {"id":"94" , "name":"PayPal", "file":"paypal.gif", "active":"1" },
                {"id":"1000" , "name":"Boleto Bancário", "file":"boleto.jpg", "active":"1" },
                {"id":"1001" , "name":"Débito Bradesco", "file":"debito_bradesco.jpg", "active":"0" },
                {"id":"1002" , "name":"Transferencia entre Contas Bradesco", "file":"bradesco_transferencia.jpg", "active":"1" },
                {"id":"1003" , "name":"QIWI Wallet", "file":"qiwi_wallet_v2.gif", "active":"1" },
                {"id":"1004" , "name":"Beeline", "file":"beeline.gif", "active":"1" },
                {"id":"1005" , "name":"Megafon", "file":"megafon_v1.gif", "active":"1" },
                {"id":"1006" , "name":"MTS", "file":"mts.gif", "active":"1" },
                {"id":"1007" , "name":"WebMoney", "file":"webmoney.gif", "active":"1" },
                {"id":"1008" , "name":"Yandex", "file":"yandex_money.gif", "active":"1" },
                {"id":"1009" , "name":"Alliance Online", "file":"alliance_online.gif", "active":"0" },
                {"id":"1010" , "name":"AmBank", "file":"ambankgroup.gif", "active":"1" },
                {"id":"1011" , "name":"CIMB Clicks", "file":"cimb_clicks.gif", "active":"1" },
                {"id":"1012" , "name":"FPX", "file":"1012_FPX.gif", "active":"0" },
                {"id":"1013" , "name":"Hong Leong Bank Transfer", "file":"hong_leong.gif", "active":"1" },
                {"id":"1014" , "name":"Maybank2U", "file":"maybank2u.gif", "active":"1" },
                {"id":"1015" , "name":"Meps Cash", "file":"meps_cash.gif", "active":"0" },
                {"id":"1016" , "name":"Mobile Money", "file":"mobile_money.gif", "active":"0" },
                {"id":"1017" , "name":"RHB", "file":"rhb.gif", "active":"1" },
                {"id":"1018" , "name":"Webcash", "file":"web_cash.gif", "active":"0" },
                {"id":"1019" , "name":"Credit Cards Colombia", "file":"cards_colombia.jpg", "active":"0" },
                {"id":"1020" , "name":"PSE", "file":"1020_PSE.gif", "active":"0" },
                {"id":"1021" , "name":"ACH Debit", "file":"ACH.gif", "active":"0" },
                {"id":"1022" , "name":"Via Baloto", "file":"payment_in_cash.gif", "active":"0" },
                {"id":"1023" , "name":"Referenced Payment", "file":"payment_references.gif", "active":"0" },
                {"id":"1024" , "name":"Mandiri", "file":"1024_Mandiri_clickpay_v1.gif", "active":"0" },
                {"id":"1025" , "name":"XLTunai", "file":"XLTunai.gif", "active":"0" },
                {"id":"1026" , "name":"Bancomer Pago referenciado", "file":"bancomer.gif", "active":"0" },
                {"id":"1027" , "name":"Santander Pago referenciado", "file":"santander.gif", "active":"0" },
                {"id":"1028" , "name":"ScotiaBank Pago referenciado", "file":"scotiabank.gif", "active":"0" },
                {"id":"1029" , "name":"7-Eleven Pago en efectivo", "file":"7eleven.gif", "active":"0" },
                {"id":"1030" , "name":"Oxxo Pago en efectivo", "file":"oxxo.gif", "active":"0" },
                {"id":"1031" , "name":"IXE Pago referenciado", "file":"IXe.gif", "active":"0" },
                {"id":"1032" , "name":"Boleto Bancário Itaú", "file":"boleto_bancario_itau.gif", "active":"1" },
                {"id":"1033" , "name":"Cards Thailand", "file":"cards_brl.gif", "active":"0" },
                {"id":"1034" , "name":"PayPal Thailand", "file":"paypal.gif", "active":"0" },
                {"id":"1035" , "name":"AMEX Thailand", "file":"american_express.jpg", "active":"0" },
                {"id":"1036" , "name":"Cash Options Thailand", "file":"1036_counter_service_TEMP.gif", "active":"1" },
                {"id":"1037" , "name":"Online Banking Thailand", "file":"onlinebankingthailand.gif", "active":"1" },
                {"id":"1038" , "name":"PaysBuy Wallet", "file":"paysbuy.gif", "active":"0" },
                {"id":"1039" , "name":"Pagos en efectivo Chile", "file":"pagos_en_efectivo_chile.gif", "active":"0" },
                {"id":"1040" , "name":"Pagos en efectivo Argentina", "file":"pagos_en_efectivo_argentina.gif", "active":"0" },
                {"id":"1041" , "name":"OP-Pohjola", "file":"osuuspankki.gif", "active":"1" },
                {"id":"1042" , "name":"Nordea", "file":"nordea.gif", "active":"1" },
                {"id":"1043" , "name":"Danske", "file":"1043_danske.gif", "active":"1" },
                {"id":"1044" , "name":"Cash-in", "file":"1044_cash-in_yandex.gif", "active":"1" },
                {"id":"1045" , "name":"Cards Russia", "file":"1045_cards.gif", "active":"1" },
                {"id":"1046" , "name":"Konbini", "file":"degica_kombini.gif", "active":"1" },
                {"id":"1047" , "name":"Cards Japan", "file":"degica_cards.gif", "active":"1" },
                {"id":"1048" , "name":"BankTransfer Japan", "file":"degica_bank_transfer.gif", "active":"1" },
                {"id":"1049" , "name":"PayEasy Japan", "file":"degica_payeasy.gif", "active":"1" },
                {"id":"1050" , "name":"WebMoney Japan", "file":"degica_webmoney.gif", "active":"0" },
                {"id":"1051" , "name":"Globe GCash", "file":"gcashlogo.jpg", "active":"1" },
                {"id":"1052" , "name":"Klarna Checkout", "file":"1052_klarna_checkout.gif", "active":"0" },
                {"id":"1053" , "name":"Credit Card", "file":"1053_credit_cards.gif", "active":"0" },
                {"id":"1054" , "name":"BII VA", "file":"1054_BII-VA.gif", "active":"1" },
                {"id":"1055" , "name":"Kartuku", "file":"1055_Kartuku.gif", "active":"0" },
                {"id":"1056" , "name":"CIMBClicks", "file":"1056_Cimb_Clicks.gif", "active":"1" },
                {"id":"1057" , "name":"Mandiri e-Cash", "file":"1057_Mandiri_ecash.gif", "active":"0" },
                {"id":"1058" , "name":"IB Muamalat", "file":"1058_IB_Muamalat.gif", "active":"1" },
                {"id":"1059" , "name":"T-Cash", "file":"1059_T-cash.gif", "active":"0" },
                {"id":"1060" , "name":"Indosat Dompetku", "file":"1060_Indosat_Dompetku.gif", "active":"0" },
                {"id":"1061" , "name":"Mandiri ATM Automatic", "file":"1061_Mandiri_atm_automatic.gif", "active":"1" },
                {"id":"1062" , "name":"Pay4ME", "file":"1062_pay4me.gif", "active":"0" },
                {"id":"1063" , "name":"Danamon Online Banking", "file":"1063_Danamon.gif", "active":"1" },
                {"id":"1064" , "name":"Sberbank", "file":"1064_Sberbank.gif", "active":"0" },
                {"id":"1065" , "name":"Tele2", "file":"1065_Tele2.gif", "active":"1" },
                {"id":"1066" , "name":"WeChat", "file":"1066_WeChat.gif", "active":"1" },
                {"id":"1067" , "name":"Public Bank Online", "file":"1067_public_bank_online.gif", "active":"1" },
                {"id":"1068" , "name":"Credit Card Malaysia", "file":"1068_credit_card.gif", "active":"0" },
                {"id":"1069" , "name":"AllianceOnline", "file":"1069_alliance_online.gif", "active":"0" },
                {"id":"1070" , "name":"Celcom AirCash", "file":"1070_celcom_aircash.gif", "active":"0" },
                {"id":"1071" , "name":"Bank Rakyat Internet Banking", "file":"1071_bank_rakyat_internet_banking.gif", "active":"1" },
                {"id":"1072" , "name":"AffinOnline", "file":"1072_affin_online.gif", "active":"1" },
                {"id":"1073" , "name":"Pay4Me Malaysia", "file":"1073_pay4me_(Delay_payment).gif", "active":"1" },
                {"id":"1074" , "name":"myBSN", "file":"1074_mybsn.gif", "active":"0" },
                {"id":"1075" , "name":"Bank Islam Online", "file":"1075_bank_islam_online.gif", "active":"0" },
                {"id":"1076" , "name":"UOB Online", "file":"1076_uob_online.gif", "active":"0" },
                {"id":"1077" , "name":"Hong Leong Connect PEx+", "file":"1077_Hong_Leong_Connect_PEx.gif", "active":"1" },
                {"id":"1078" , "name":"Klarna Payments", "file":"1078_klarna_payments.gif", "active":"1" },
                {"id":"1079" , "name":"Credit Cards Argentina", "file":"1079_Cards_Argentina.gif", "active":"1" },
                {"id":"1080" , "name":"Santander Rio", "file":"1080_Santander_Rio.gif", "active":"1" },
                {"id":"1081" , "name":"Cash Payments Argentina", "file":"1081_Cash_Payments_Argentina.gif", "active":"1" },
                {"id":"1082" , "name":"Credit Cards Brazil", "file":"1082_Cards_Brasil.gif", "active":"1" },
                {"id":"1083" , "name":"Boleto Brazil", "file":"1083_Boleto_Brazil.gif", "active":"1" },
                {"id":"1084" , "name":"Online Bank Transfer Brazil", "file":"1084_Online_Bank_Transfer_Brasil.gif", "active":"1" },
                {"id":"1085" , "name":"Credit Cards Chile ", "file":"1085_Cards_Chile.gif", "active":"1" },
                {"id":"1086" , "name":"ServiPagChile", "file":"1086_ServiPagChile.gif", "active":"1" },
                {"id":"1087" , "name":"WebPay", "file":"1087_WebPay.gif", "active":"1" },
                {"id":"1088" , "name":"Cards Colombia", "file":"1088_Cards_Colombia.gif", "active":"1" },
                {"id":"1089" , "name":"PSE Colombia", "file":"1089_PSE_Colombia.gif", "active":"1" },
                {"id":"1090" , "name":"Cash payment Colombia", "file":"1090_Cash_Payments_Colombia.gif", "active":"1" },
                {"id":"1091" , "name":"Cards Mexico", "file":"1091_Cards_Mexico.gif", "active":"1" },
                {"id":"1092" , "name":"Oxxo Mexico", "file":"1092_Oxxo_Mexico.gif", "active":"1" },
                {"id":"1093" , "name":"SPEI Mexico", "file":"1093_SPEI_Mexico.gif", "active":"1" },
                {"id":"1094" , "name":"Bank Transfer Mexico", "file":"1094_Bank_Transfer_Mexico.gif", "active":"1" },
                {"id":"1095" , "name":"Credit Cards Uruguay", "file":"1095_Cards_Uruguay.gif", "active":"1" },
                {"id":"1096" , "name":"Redpagos", "file":"1096_Redpagos.gif", "active":"1" },
                {"id":"1097" , "name":"Cards Peru", "file":"1097_Cards_Peru.gif", "active":"1" },
                {"id":"1098" , "name":"Cash payment Peru", "file":"1098_Cash_Payments_Peru.gif", "active":"1" },
                {"id":"1099" , "name":"Online Bank Transfer Peru", "file":"1099_Bank_Transfer_Peru.gif", "active":"1" },
                {"id":"1100" , "name":"VTCPay Wallet", "file":"1100_VTCPay_Wallet.gif", "active":"1" },
                {"id":"1101" , "name":"Cards Vietnam", "file":"1101_Cards_Vietnam.gif", "active":"1" },
                {"id":"1102" , "name":"Online Banking Vietnam", "file":"1102_Online_Banking_Vietnam.gif", "active":"1" },
                {"id":"1103" , "name":"Rapi Pago", "file":"1103_Rapi_Pago.gif", "active":"1" },
                {"id":"1104" , "name":"Pago Fácil", "file":"1104_Pago_Facil.gif", "active":"1" },
                {"id":"1105" , "name":"Credit Cards Turkey", "file":"1105_Credit_Cards_Turkey.gif", "active":"1" },
                {"id":"1106" , "name":"Credit Cards India", "file":"1106_Credit_Cards_India.gif", "active":"1" },
                {"id":"1107" , "name":"NetBanking", "file":"1107_NetBanking.gif", "active":"1" },
                {"id":"1108" , "name":"UPI", "file":"1108_UPI.gif", "active":"1" },
                {"id":"1109" , "name":"Bank Transfer Turkey", "file":"1109_Bank_Transfer_Turkey.gif", "active":"0" },
                {"id":"1110" , "name":"BKM Express", "file":"1110_BKM_Express.gif", "active":"0" },
                {"id":"1111" , "name":"Cards Turkey", "file":"1111_Cards_Turkey.gif", "active":"0" },
                {"id":"1112" , "name":"Ininal", "file":"1112_Ininal.gif", "active":"0" },
                {"id":"1113" , "name":"Cards LATAM", "file":"1113_Cards_LATAM.gif", "active":"1" },
                {"id":"1114" , "name":"GPay", "file":"0089_GPay.gif", "active":"0" },
                {"id":"1115" , "name":"M-Pesa Mobile Money", "file":"1115_MPesa.gif", "active":"0" },
                {"id":"1116" , "name":"Airtel Mobile Money", "file":"1116_airtel.gif", "active":"0" },
                {"id":"1117" , "name":"MTN Mobile Money", "file":"1117_mtn.gif", "active":"0" },
                {"id":"1118" , "name":"Tigo", "file":"1118_tigo.gif", "active":"0" },
                {"id":"1119" , "name":"DTB", "file":"1119_dtb.gif", "active":"0" },
                {"id":"1120" , "name":"Equity", "file":"1120_equity.gif", "active":"0" },
                {"id":"1121" , "name":"M-Pesa", "file":"1115_MPesa.gif", "active":"1" },
                {"id":"1122" , "name":"Airtel Money", "file":"1116_airtel.gif", "active":"1" },
                {"id":"1123" , "name":"Equitel", "file":"1123_Equitel.gif", "active":"1" },
                {"id":"1124" , "name":"Tigo Pesa", "file":"1118_tigo.gif", "active":"1" },
                {"id":"1125" , "name":"MTN", "file":"1117_mtn.gif", "active":"1" },
                {"id":"1126" , "name":"PesaLink", "file":"1126_PesaLink.gif", "active":"1" },
                {"id":"1127" , "name":"NIBSS", "file":"1127_NIBSS.gif", "active":"1" },
                {"id":"1128" , "name":"Tingg Wallet", "file":"1128_tingg.gif", "active":"0" },
                {"id":"1129" , "name":"PostFinance Card", "file":"1129_postfinancecard.gif", "active":"1" },
                {"id":"1130" , "name":"PostFinance E-finance", "file":"1130_postfinanceefinance.gif", "active":"1" },
                {"id":"1131" , "name":"PayTM", "file":"1131_Paytm.gif", "active":"1" },
                {"id":"1132" , "name":"Klarna Pay Later", "file":"1132_Klarna_Pay_Later.gif", "active":"1" },
                {"id":"1133" , "name":"Klarna Slice It", "file":"1133_Klarna_Slice_It.gif", "active":"1" },
                {"id":"1134" , "name":"GCash", "file":"1134_GCash.gif", "active":"1" },
                {"id":"1135" , "name":"KakaoPay", "file":"1135_KakaoPay.gif", "active":"1" },
                {"id":"1136" , "name":"Dana", "file":"1136_Dana.gif", "active":"1" },
                {"id":"1137" , "name":"Touch'n Go", "file":"1137_Touch'nGo.gif", "active":"1" },
            ]
        }
    ]
];