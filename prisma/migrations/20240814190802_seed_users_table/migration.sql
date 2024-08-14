-- This is an empty migration.
WITH inserted_users AS (
    INSERT INTO users (user_name, password, role, updated_at) values
        ('admin', '$2a$08$NjDFVeausjU0cezF2cIFZOkYEAvhXPetknjsKVVPy0fNXvWBdMPnC', 'ADMIN', NOW()),
        ('00354249000103', '$2a$08$mjU421IhVVQwWBmpLOz0y.dP4Ryy.UlZ55FvJYowGZYg7aivaisYG', 'USER', NOW()),
        ('00830456000189', '$2a$08$1la7zfneCdDhlIBWt519M.SQ2FoYnyd/zXWoW1FCZQKi6Bsk3Rhly', 'USER', NOW()),
        ('01468490000118', '$2a$08$z4YE0FWN4enfw/6J4Bbf7uRfepngjMw5s0fb5KKK4VIz3fuPhaYZ6', 'USER', NOW()),
        ('01934557000162', '$2a$08$PFC7D0Jap1mQnbA9oMefrOyCcM4Ke2nvSJfAlpTQWbpI2To3FS5rC', 'USER', NOW()),
        ('02035980000193', '$2a$08$lGjPCGfA3QQZaUqSWWxlTev1U0pVxaE1BPKda27qRXo4WkQNZeE9O', 'USER', NOW()),
        ('02042206000100', '$2a$08$l4NFeCfrkmPOcFnsy.fZ3OovxH7fZTHmIeg09TQ8.m9MGnoYVb5se', 'USER', NOW()),
        ('02072540000106', '$2a$08$7d/ppbZY66ExXpgER62zceDy4HSFFiVYJLbFKpmYcJR.Cp3q7eoe6', 'USER', NOW()),
        ('02626780000105', '$2a$08$CHS4H.E5xqhKkSFyRJD8S.EADiWWXhb869bZdhUyexGoIaS/XAROa', 'USER', NOW()),
        ('03132376000148', '$2a$08$GEUHp7BwB0I0qVjuqikGTeqNpoBJHfRA64IOGnTEMFfJVMR05bL6.', 'USER', NOW()),
        ('03940344000179', '$2a$08$gkHu2U2J2uxgzGzJKHtBZeMqcuLI6M5Imndb55dbLvMwwXpVoKN9.', 'USER', NOW()),
        ('07790043000167', '$2a$08$B.uEuLFe5MbSqPAa/x51gOkX7DWPk1yDaHzKqqcyqzBiJdMvDpZiO', 'USER', NOW()),
        ('07863379000102', '$2a$08$gkmPxdJ1mvQ9Kl848yfONO5gglzpAm5hUDZdgF6I5t7xPxZcXFz/a', 'USER', NOW()),
        ('08065638000112', '$2a$08$LXD7lIL/Mq8s8BbcSkaAk.QjJJD0klMV2/.urNKt5GZ0mbUvdJ4Vm', 'USER', NOW()),
        ('09722736000148', '$2a$08$E7Xevb8a7iFg4ZH7UBeRKO4ddHrzp2KD1EofBGwnwCX0Nc/ByIWTK', 'USER', NOW()),
        ('10703555000153', '$2a$08$QidEWFPtylvVwzLMJPVgOuv0TJI2fW2dYfC2j99ZvSTd7aNNDmeju', 'USER', NOW()),
        ('10794663000189', '$2a$08$CA1evgk386ZrDU1qiuBtbOMSqhs9AAvIBL0JNkV4FzL/rqMLUDr8e', 'USER', NOW()),
        ('11372803000193', '$2a$08$0OS0/btaHP73IalOVIDazuDJDW58wuxTt0fvHI7MGi8uzGSmRYRf6', 'USER', NOW()),
        ('11715715000147', '$2a$08$tlKlBuLmwY7ltYB4bXziguxSOf5PE8TzPAP5PoYKn/8uHRUZY.BgC', 'USER', NOW()),
        ('12678433000180', '$2a$08$Do3CvKJGmKab9WH6GAQsIOgT.bKap7LOutJWTVK0UcUd5L7JvID/O', 'USER', NOW()),
        ('13557757000122', '$2a$08$9JaiXnf5VYsOidHy64lZl.Qbcm4aYTtE.vYHCup9FI0YS9GcS96WS', 'USER', NOW()),
        ('13704386000164', '$2a$08$UeQBMjZbVyP/wFFhVV9gzeIDm8kwtx5JkDIouMctuomJ0KQt7hgAS', 'USER', NOW()),
        ('13942109000190', '$2a$08$6JuxTkeRTTwenUZiyMovmu0OfL4p2YZ5v0qEcxP880FiQfQ9R0.gC', 'USER', NOW()),
        ('15519931000178', '$2a$08$6JwK.fmovgkUm9duCZnzOOvWoRPIc1kQlVh625uPV5Y0CSmYQAvjm', 'USER', NOW()),
        ('17335898000151', '$2a$08$WU1z2LXW81n4LJ8VWwmv2eD3XfQnvLXrBT2Xgc/VFv6x1xJB05U/y', 'USER', NOW()),
        ('17798934000113', '$2a$08$KXIexnQSSgZR9rkEbe2cceUyUpb3z7BPD/.pWmG/jsqux4sx.h316', 'USER', NOW()),
        ('18219058000196', '$2a$08$sRhQxHKBlsgNwtP1DjugteDKZLNxXbKfGTfSOM3ZKjp3zKXP8sipS', 'USER', NOW()),
        ('20663901000170', '$2a$08$UI5rQJkDXDAVTxqUWOnaQu.uRNKzRzsVb82PMSIq2tfA2EnHEEi0O', 'USER', NOW()),
        ('24090496000108', '$2a$08$ViktrLRUoY94sQUGUbI12..HW0E7YaAZ50GAqAB4r/3r86iLeEgqK', 'USER', NOW()),
        ('24300623000148', '$2a$08$3u.u6fZ2XaGBhcIjaXN6K.vrhqTudwayDlfi43CG3f0EYLvsXvPnW', 'USER', NOW()),
        ('24792957000186', '$2a$08$EY44XYfxRXy/x9Pv4IzaNOV.pYugKVEDPDJAroXkiqn7PJAoWdIAi', 'USER', NOW()),
        ('26072471000107', '$2a$08$0GByJlSYgybLj5vBv2WcUO1p.HZxtijbWIFOrHxlaF0Sil48vUBce', 'USER', NOW()),
        ('26085405000163', '$2a$08$axgbDBO8g93hhK7VS3pUGetCdbr2h1HRP5iGBbwZkwgsTq8FquIGS', 'USER', NOW()),
        ('30171580000140', '$2a$08$QIWyMWS/rSqmfmQtze4r5u5t3tuRnKPJkCMR/XipbW1oofREhUtn2', 'USER', NOW()),
        ('33043335000146', '$2a$08$2UaXquqIHNjcZcsGJEUDD.aAdEjQvCSxuWIzG3i2RC1oXSmY3/Eq6', 'USER', NOW()),
        ('40481195000153', '$2a$08$WA0Ax8AIrqZ09ekmXEOUGeMqv2MNxoQvAkk6ZEQQzKMNg7atWIT/m', 'USER', NOW()),
        ('42947576000100', '$2a$08$y7I.YaAXnt0msMgWT10VkuXD3vmBuoATgfNBGznWqPLdG3JkM0TZ2', 'USER', NOW()),
        ('43060304000157', '$2a$08$.GMXAUXS2Pw8tU3/2etjNuX9FGaSt7bP5CixpVItxMwc6HT9GBa3y', 'USER', NOW()),
        ('46325985000126', '$2a$08$J0Zy0To4tXNjU8M7h.xHfuvDkzLviN0Y9zKkQo7qGQXf8SGZPqfV2', 'USER', NOW()),
        ('75547893000199', '$2a$08$2G1LG8ySUeKBh/MiQGfqC.L8.fGo0Uag2vSLwCQtd0vDw93OLVN6m', 'USER', NOW()),
        ('75991802000100', '$2a$08$v1UB0domxAFUW.ZZLIdAYOzoi4XqhmU9H9s7InpO6Y2cJXA9pmKQS', 'USER', NOW()),
        ('77088839000158', '$2a$08$4TDab/ny9TSgkcsTMIN2/edeDTeiAvWdVMtFLfogGRv44YFJ1HlCW', 'USER', NOW()),
        ('77759272000102', '$2a$08$OZcAkpFnUAi9JKwTxNy5qeydEcHOcDMw7jTuWsWzgMP3Icx1FM28a', 'USER', NOW()),
        ('79462198000185', '$2a$08$RBs5hnV0lQq8Pt2YFc32fOiH/Ec.pLZ6KLMtAvSYZehaXO1IaaLbG', 'USER', NOW()),
        ('40566324000106', '$2a$08$AVNM/Vhv7Y1K3ktLnWQj2.lcUX2Px0e.R/QypfCWKh/0WL9Kn321K', 'USER', NOW()),
        ('24909652000101', '$2a$08$cL5B.DrNeVjOdKZpwQBufOg3Asi/BKyHGI2CI9g5zeqnI1dgI9vPu', 'USER', NOW()),
        ('52029701000157', '$2a$08$8UxVydfyXJx1mWTZyAT45uOwyfG5HZsMqNAcGtgoHF2rZRDcyoZxe', 'USER', NOW())
    RETURNING id, user_name
)

UPDATE covenants cv
   SET user_id = iu.id
  FROM inserted_users iu
 WHERE iu.user_name = regexp_replace(cv.cnpj, '\D', '', 'g')