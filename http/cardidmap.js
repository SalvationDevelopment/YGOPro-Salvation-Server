var replaces = {
    100417001: 15180041,
    100417010: 16625614,
    100417006: 17841166,
    100417003: 18563744,
    100417008: 39238953,
    100417002: 41175645,
    100207100: 43845801,
    100417004: 44968459,
    100417009: 80230510,
    100417005: 80352158,
	100302041: 1561110,
	100302021: 2783661,
	100302001: 30012506,
	100302003: 3405259,
	100302032: 39778366,
	100302100: 39890958,
	100302040: 65172015,
	100302024: 66399653,
	100302002: 77411244,
	100301003: 15502037,
	100301022: 41735184,
	100301001: 42023223,
	100301002: 79418928,
	100301004: 42901635,
	100301041: 4628897,
	100301021: 4740489,
	100301033: 77133792,
	100301005: 78355370,
	100200117: 19502505,
	100299001: 82103466,
	100910001: 38955728,
	100910002: 64450427,
	100910003: 91449532,
	100910004: 33833230,
	100910005: 69228245,
	100910006: 96622984,
	100910007: 22011689,
	100910008: 69105797,
	100910009: 95500396,
	100910010: 21999001,
	100910011: 58383100,
	100910012: 94388754,
	100910013: 21772453,
	100910014: 57261568,
	100910015: 93665266,
	100910016: 20050865,
	100910017: 56049970,
	100910018: 83443619,
	100910019: 29838323,
	100910020: 55326322,
	100910021: 82321037,
	100910022: 18716735,
	100910023: 55100740,
	100910024: 81599449,
	100910025: 18993198,
	100910026: 44088292,
	100910100: 80476891,
	100910028: 17871506,
	100910029: 43266605,
	100910030: 80250319,
	100910031: 16759958,
	100910032: 42143067,
	100910033: 79538761,
	100910034: 15936370,
	100910035: 42921475,
	100910036: 78316184,
	100910037: 4810828,
	100910038: 41209827,
	100910039: 77693536,
	100910040: 4688231,
	100910041: 30086349,
	100910042: 76471944,
	100910043: 3966653,
	100910044: 39964797,
	100910045: 76359406,
	100910046: 2743001,
	100910047: 38148100,
	100910048: 65536818,
	100910049: 1621413,
	100910050: 38026562,
	100910051: 64414267,
	100910052: 90809975,
	100910053: 37803970,
	100910054: 3298689,
	100910055: 30786387,
	100910056: 66171432,
	100910057: 3576031,
	100910058: 39564736,
	100910059: 65959844,
	100910060: 92353449,
	100910061: 38848158,
	100910062: 65236257,
	100910063: 91231901,
	100910064: 37626500,
	100910065: 64014615,
	100910066: 90519313,
	100910067: 27503418,
	100910068: 63992027,
	100910069: 99397762,
	100910070: 26781870,
	100910071: 52176579,
	100910072: 99274184,
	100910073: 25669282,
	100910074: 51053997,
	100910075: 84442536,
	100910076: 20447641,
	100910101: 57831349,
	100910078: 83326048,
	100910079: 29724053,
	100910080: 56119752,
	100910199: 76359407,
	100200120: 77363314,
	100208001: 30757127,
	100208002: 66141736,
	100208003: 2530830,
	100208004: 39024589,
	511000819: 82301904,
	511000825: 83555666,
	511002631: 26202165,
	511511511: 40737112,
	511000228: 95727991,
	511000818: 8131171,
	44763026: 44763025,
	63519820: 63519819,
	64631467: 64631466,
	100204005: 64207696,
	100909000: 43930492,
	100909081: 79324191,
	100909082: 16719140,
	100909083: 42713844,
	100909084: 78202553,
	100909085: 5697558,
	100909086: 41091257,
	100909087: 78080961,
	100909088: 4474060,
	100909089: 30979619,
	100405001: 91691605,
	100405002: 37780349,
	100405003: 64184058,
	100405004: 90579153,
	100405005: 26964762,
	100405006: 63362460,
	100405007: 99357565,
	100405016: 52240819,
	100405017: 99634927,
	100405018: 25629622,
	100405019: 51028231,
	100405020: 88412339,
	100405021: 24907044,
	100405022: 51391183,
	100405023: 87390798,
	100405024: 23784496,
	100405025: 50179591,
	100405026: 86578200,
	100405027: 13662809,
	100405028: 59057953,
	100405029: 25451652,
	100405030: 52840267,
	100405031: 88234365,
	100405032: 25339070,
	100405033: 51728779,
	100405034: 87112784,
	100405035: 14517422,
	100405036: 50501121,
	100405037: 87990236,
	100405101: 26841274,
	100200121: 12262393,
	100200118: 55997110,
	100200119: 81481818,
	100200122: 30603688,
	100303000: 18486927,
	100303001: 44874522,
	100303002: 81269231,
	100303003: 17663375,
	100303021: 44052074,
	100303022: 70147689,
	100211001: 90036274,
	100911001:	45667991,
	100911002:	81055000,
	100911003:	17540705,
	100911004:	44944304,
	100911005:	70939418,
	100911006:	17328157,
	100911007:	43722862,
	100911008:	70117860,
	100911009:	6205579,
	100911010:	42600274,
	100911011:	79094383,
	100911012:	5489987,
	100911013:	42878636,
	100911014:	78872731,
	100911015:	4367330,
	100911016:	31755044,
	100911017:	77150143,
	100911018:	4145852,
	100911019:	30539496,
	100911020:	66938505,
	100911021:	3422200,
	100911022:	39817919,
	100911023:	66815913,
	100911024:	92200612,
	100911025:	38695361,
	100911026:	65193366,
	100911027:	91588074,
	100911028:	38572779,
	100911029:	64977888,
	100911030:	90365482,
	100911031:	27750191,
	100911032:	63845230,
	100911033:	90243945,
	100911034:	26638543,
	100911035:	52022648,
	100911036:	99427357,
	100911037:	25415052,
	100911038:	52900000,
	100911039:	88305705,
	100911040:	25793414,
	100911041:	51788412,
	100911042:	87182127,
	100911043:	14577226,
	100911044:	50065971,
	100911045:	87460579,
	84760579:	87460579,
	100911046:	13455674,
	100911047:	59843383,
	100911048:	86238081,
	100911049:	12632096,
	100911050:	49121795,
	100911051:	85115440,
	100911052:	11510448,
	100911053:	48905153,
	100911054:	74393852,
	100911055:	11398951,
	100911056:	47882565,
	100911057:	73271204,
	100911059:	46060017,
	100911060:	73055622,
	100911061:	9553721,
	100911062:	45948430,
	100911063:	72332074,
	100911064:	8321183,
	100911065:	35726888,
	100911066:	11110587,
	100911067:	48605591,
	100911068:	74003290,
	100911069:	98905,
	100911070:	47482043,
	100911072:	276357,
	100911073:	32360466,
	100911074:	78765160,
	100911075:	5153769,
	100911076:	31548814,
	100911077:	78942513,
	100911078:	4931121,
	100911079:	30426226,
	100911080:	67820935,
	100911100:	675319,
	100911102:	73881652,
	100911101:	46060017,
	100911103:	5153769,
	100200123:	26420373,
	100910000: 92092092,
	100910081: 66698383,
	100910082: 39581190,
	100910083: 65976795,
	100910084: 92970404,
	100910085: 28369508,
	100910086: 64753157,
	100910087: 91258852,
	100910088: 27642961,
	100910089: 54631665,
	100406001: 53819028,
	100406002: 99913726,
	100406003: 26308721,
	100406004: 52792430,
	100406005: 89181134,
	100406009: 25586143,
	100406010: 51570882,
	100406011: 88069597,
	100406012: 14463695,
	100406013: 51858200,
	100406014: 87246309,
	100406015: 13241004,
	100406020: 40636712,
	100406026: 86120751,
	100406027: 13529466,
	100406028: 49513164,
	100406029: 85908279,
	100406030: 12307878,
	100406031: 48791583,
	100406032: 75286621,
	100406033: 11270236,
	100406034: 47679935,
	100406035: 74063034,
	100406036: 458748,
	100406100: 47457347,
	100200124: 69946549,
	100212003: 9336190,
	100212004: 36730805,
	100212100: 72129804,
	100212006: 9113513,
	100212010: 35618217,
	100212014: 71007216,
	100212015: 8491961,
	100212016: 34496660,
	100212020: 61884774,
	100212021: 7279373,
	100212022: 34773082,
	100212023: 60168186,
	100212027: 96157835,
	100212035: 33541430
}