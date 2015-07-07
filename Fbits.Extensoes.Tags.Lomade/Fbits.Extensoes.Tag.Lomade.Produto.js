	var Fbits = Fbits || {};
        Fbits.Extensoes = Fbits.Extensoes || {};
        Fbits.Extensoes.Tags = Fbits.Extensoes.Tags || {};

        //
        // Recebe ID do Parceiro GoogleParams
        Fbits.Extesoes.Tags.Effiliation = function (id, gp) {
            //
            // URL: http://track.efiliacao.com/servlet/effi.revenue?id=660008563&montant=[[montant]]&monnaie=[[monnaie]]&ref=[[ref]]&payment=[[payment]]&newcustomer=[[newcustomer]]&voucher=[[voucher]]&ref2=[[paybox_direct]]
            var self = this;
            var _ub = new Fbits.Framework.UrlUtils.Builder("http://track.efiliacao.com/servlet/effi.revenue");
            _ub.set("id", id);
            _ub.set("montant", gp.psubtotal);
            _ub.set("ref", gp.ptransactionid);
            _ub.set("payment", "CB");
            _ub.set("newcustomer", gp.pnewcustomer);

            this.build = function () {
                var i = $("<img />").insertAfter("body");
                i.attr("src", _ub.build());
            }

        }

        $(function () {
            var e = new Fbits.Extesoes.Tags.Effiliation(10101010, google_tag_params);
            e.build();
        });
