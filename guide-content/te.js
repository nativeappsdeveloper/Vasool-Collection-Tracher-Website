window.GUIDE_CONTENT = {
  lang: 'te',
  ui: {
    docTitle: 'Vasool Collection Tracker — వినియోగదారు గైడ్',
    pageTitle: 'Vasool Collection Tracker వినియోగదారు గైడ్',
    guideLabel: 'వినియోగదారు గైడ్',
    tagline: 'EMI లు & తిరిగి చెల్లింపులను ట్రాక్ చేయడానికి సులభమైన లోన్ మేనేజర్ — ప్రతి ఫీచర్, దాన్ని ఎలా వాడాలి, మరియు యాప్ మొత్తం పనితీరు.',
    version: 'Vasool Collection Tracker v1.0 కు వర్తిస్తుంది',
    contents: 'విషయసూచిక',
    backHome: '← హోమ్‌కు తిరిగి వెళ్ళండి',
    pricingLink: 'ధరలు',
    download: 'యాప్ డౌన్‌లోడ్ చేయండి',
    footerNote: '© 2026 Vasool Collection Tracker. భారతీయ ఫైనాన్స్ నిపుణుల కోసం ❤️ తో తయారు చేయబడింది.'
  },
  sections: [
    {
      id: 'what-is-vasool-tracker', num: 1, title: 'Vasool Collection Tracker అంటే ఏమిటి?',
      html: `
<p>Vasool Collection Tracker అనేది ఫైనాన్స్ వ్యాపారాలు మరియు వ్యక్తిగత వసూలు ఏజెంట్ల కోసం రూపొందించిన లోన్ మరియు వసూలు నిర్వహణ యాప్. ఇది కాగితపు "వసూలు" నోట్‌బుక్ స్థానంలో పనిచేస్తుంది: రుణగ్రహీతలను <strong>కలెక్షన్లుగా</strong> (వసూలు లైన్లు/రూట్లు) ఏర్పాటు చేసి, <strong>లోన్లు</strong> ఇచ్చి, వసూలు చేసే క్రమంలో <strong>EMI చెల్లింపులను</strong> నమోదు చేస్తారు — ఆటోమేటిక్ బ్యాలెన్స్ ట్రాకింగ్, గడువు తేదీ ట్రాకింగ్, రసీదులు, రిపోర్టులు, బ్యాకప్‌లతో సహా.</p>
<ul>
<li>పూర్తిగా ఆఫ్‌లైన్‌లో పనిచేస్తుంది; డేటా మీ ఫోన్‌లోనే నిల్వ అవుతుంది</li>
<li>6 యాప్ భాషల్లో అందుబాటులో ఉంది: English, தமிழ், हिंदी, తెలుగు, ಕನ್ನಡ, മലയാളം</li>
<li>ఐచ్ఛిక Google Drive బ్యాకప్ మీ డేటాను సురక్షితంగా ఉంచుతుంది</li>
</ul>`
    },
    {
      id: 'core-concepts', num: 2, title: 'ప్రధాన భావనలు & యాప్ పనితీరు',
      html: `
<div class="table-wrap"><table>
<thead><tr><th>పదం</th><th>అర్థం</th></tr></thead>
<tbody>
<tr><td><strong>సంస్థ</strong></td><td>మీ వ్యాపారం — పేరు, ఫోన్, లోగో, కరెన్సీ. రసీదులు మరియు PDF లలో కనిపిస్తుంది.</td></tr>
<tr><td><strong>కలెక్షన్</strong></td><td>ఒకే వసూలు సైకిల్‌లో వసూలు చేసే కస్టమర్ల గ్రూప్/లైన్ (ఉదా., "మార్కెట్ స్ట్రీట్ డైలీ"). రకం (రోజువారీ/వారానికి/నెలవారీ…), వడ్డీ రేటు, డిఫాల్ట్ వాయిదాల సంఖ్యను నిర్ణయిస్తుంది.</td></tr>
<tr><td><strong>కస్టమర్</strong></td><td>ఒక కలెక్షన్‌లోని రుణగ్రహీత — పేరు, ఫోన్, ఫోటో, చిరునామా, GPS లొకేషన్.</td></tr>
<tr><td><strong>లోన్</strong></td><td>కస్టమర్‌కు ఇచ్చిన డబ్బు. కలెక్షన్ సెట్టింగ్‌ల నుండి వడ్డీ, మొత్తం సొమ్ము, EMI మొత్తం, గడువు తేదీలను యాప్ లెక్కిస్తుంది.</td></tr>
<tr><td><strong>EMI / వాయిదా</strong></td><td>ఒక తిరిగి చెల్లింపు. దాన్ని నమోదు చేయగానే చెల్లించిన మొత్తం, బ్యాలెన్స్, తదుపరి గడువు తేదీ ఆటోమేటిక్‌గా అప్‌డేట్ అవుతాయి. బ్యాలెన్స్ సున్నా అయినప్పుడు లోన్ దానంతట అదే మూసివేయబడుతుంది.</td></tr>
</tbody></table></div>

<h3>యాప్ పనితీరు</h3>
<div class="flow">
<div class="flow-step"><div class="flow-dot">1</div><div class="flow-body"><h4>మొదటి ప్రారంభం &amp; సెటప్</h4><p>స్వాగత పరిచయం → కంపెనీ వివరాలు నమోదు చేయండి (లేదా బ్యాకప్ zip ను రీస్టోర్ చేసి నేరుగా మీ డేటాకు వెళ్ళండి).</p></div></div>
<div class="flow-step"><div class="flow-dot">2</div><div class="flow-body"><h4>కలెక్షన్ సృష్టించండి</h4><p>లైన్‌ను నిర్వచించండి: రకం (రోజువారీ/వారానికి/నెలవారీ…), వడ్డీ రేటు, డిఫాల్ట్ వాయిదాలు.</p></div></div>
<div class="flow-step"><div class="flow-dot">3</div><div class="flow-body"><h4>కస్టమర్లను జోడించండి</h4><p>లైన్‌లోని ప్రతి రుణగ్రహీతకు పేరు, ఫోన్, ఫోటో, చిరునామా మరియు GPS లొకేషన్.</p></div></div>
<div class="flow-step"><div class="flow-dot">4</div><div class="flow-body"><h4>లోన్లు ఇవ్వండి</h4><p>మొత్తాన్ని నమోదు చేయండి — వడ్డీ, మొత్తం, EMI మొత్తం మరియు గడువు తేదీలు ఆటోమేటిక్‌గా లెక్కించబడతాయి.</p></div></div>
<div class="flow-step"><div class="flow-dot">5</div><div class="flow-body"><h4>EMI లను నమోదు చేయండి</h4><p>ఇంటింటికీ వెళ్ళి వసూలు చేసి ప్రతి చెల్లింపును నమోదు చేయండి. బ్యాలెన్స్ మరియు తదుపరి గడువు తేదీ వెంటనే అప్‌డేట్ అవుతాయి; బ్యాలెన్స్ సున్నా అయినప్పుడు లోన్ ఆటోమేటిక్‌గా మూసివేయబడుతుంది.</p></div></div>
<div class="flow-step"><div class="flow-dot">6</div><div class="flow-body"><h4>ట్రాక్ చేయండి, రిపోర్ట్ చేయండి &amp; బ్యాకప్ తీసుకోండి</h4><p>డాష్‌బోర్డ్ అలర్టులు, డైలీ కలెక్షన్ ట్రాకర్, బల్క్ అప్‌డేట్, రిపోర్టులు, క్యాష్‌ఫ్లో బుక్, కస్టమర్ మ్యాప్ — మరియు రోజువారీ Google Drive ఆటో-బ్యాకప్.</p></div></div>
</div>

<div class="callout tip"><span class="ico">💡</span><p><strong>Vasool Collection Tracker తో ఒక సాధారణ రోజు:</strong> యాప్ తెరవండి → డాష్‌బోర్డ్ ఈరోజు చెల్లించాల్సినవి మరియు బకాయిలను చూపిస్తుంది → డైలీ కలెక్షన్ ట్రాకర్ లేదా ఒక కలెక్షన్ తెరవండి → ఇంటింటికీ వెళ్ళి వసూలు చేసి EMI లను నమోదు చేయండి (కస్టమర్ మ్యాప్ మీకు దారి చూపగలదు) → రసీదులను WhatsApp/SMS ద్వారా పంపండి లేదా ప్రింట్ చేయండి → రోజు నగదును క్యాష్‌ఫ్లో బుక్‌లో రాయండి → మీ Google Drive ఆటో-బ్యాకప్ ప్రతిరోజూ నడుస్తుంది.</p></div>`
    },
    {
      id: 'getting-started', num: 3, title: 'ప్రారంభించడం',
      html: `
<h3>మొదటి ప్రారంభం</h3>
<ol>
<li>యాప్ తెరవండి. 3 పేజీల పరిచయంతో <strong>స్వాగత</strong> స్క్రీన్ కనిపిస్తుంది (చూడటానికి స్వైప్ చేయండి).</li>
<li>ఇక్కడి ఎంపికలు:
<ul>
<li><strong>Watch App Demo</strong> — YouTube లో వీడియో ట్యుటోరియల్ (తమిళంలో) తెరుస్తుంది.</li>
<li><strong>Let's get Started</strong> — కంపెనీ సెటప్‌కు కొనసాగుతుంది.</li>
<li><strong>Already have a backup? click here to Restore</strong> — Vasool Collection Tracker బ్యాకప్ <code>.zip</code> ఎంచుకోండి, మీ డేటా మొత్తం తిరిగి వస్తుంది.</li>
</ul></li>
<li>మొదటి ప్రారంభంలో యాప్ <strong>నోటిఫికేషన్లు</strong> మరియు <strong>కెమెరా</strong> అనుమతి కూడా అడుగుతుంది (EMI రిమైండర్లు మరియు కస్టమర్ ఫోటోల కోసం).</li>
</ol>

<h3>కంపెనీ వివరాలు (సంస్థ సెటప్)</h3>
<ol>
<li>మీ <strong>కంపెనీ లోగో</strong> జోడించండి (ఐచ్ఛికం) — గ్యాలరీ నుండి ఎంచుకుని చతురస్రంగా క్రాప్ చేయబడుతుంది. ఇది లోన్ PDF లలో కనిపిస్తుంది.</li>
<li><strong>కంపెనీ పేరు</strong> (తప్పనిసరి) మరియు <strong>ఫోన్ నంబర్</strong> (తప్పనిసరి, ఖచ్చితంగా 10 అంకెలు) నమోదు చేయండి.</li>
<li>అవసరమైతే E-mail, చిరునామా, మరియు <strong>నియమాలు మరియు షరతులు</strong> (లోన్ PDF లపై ముద్రించబడతాయి) జోడించండి.</li>
<li>జాబితా నుండి మీ <strong>కరెన్సీ</strong> ఎంచుకోండి.</li>
<li><strong>Save Company Details</strong> నొక్కండి. మీరు డాష్‌బోర్డ్‌కు చేరుకుంటారు — సెటప్ పూర్తయింది, మళ్ళీ అడగబడదు.</li>
</ol>
<p>కంపెనీ వివరాలను ఎప్పుడైనా <strong>సెట్టింగ్‌లు → కంపెనీ వివరాలు</strong> నుండి మార్చవచ్చు.</p>`
    },
    {
      id: 'dashboard', num: 4, title: 'డాష్‌బోర్డ్',
      html: `
<p>డాష్‌బోర్డ్ మీ ప్రధాన స్థావరం. పై నుండి కింద వరకు:</p>
<ul>
<li><strong>పై బార్</strong> — మీ సంస్థ పేరు, అలాగే మూడు బటన్లు: <strong>సపోర్ట్‌ను సంప్రదించండి</strong>, <strong>ప్లాన్లు/అప్‌గ్రేడ్</strong>, మరియు <strong>సెట్టింగ్‌లు</strong>.</li>
<li><strong>కలెక్షన్ అలర్ట్ విడ్జెట్</strong> — లోన్లు బకాయి పడినప్పుడు లేదా ఈరోజు గడువు ఉన్నప్పుడు కనిపిస్తుంది ("N లోన్లు బకాయి"). దాన్ని నొక్కితే <strong>డైలీ కలెక్షన్ ట్రాకర్</strong> తెరుచుకుంటుంది.</li>
<li><strong>మొత్తం బ్యాలెన్స్ కార్డ్</strong> — అన్ని యాక్టివ్ లోన్ల మొత్తం బాకీ బ్యాలెన్స్, కలెక్షన్ రకం వారీగా నిష్పత్తి బార్‌తో విభజించబడుతుంది. ఇక్కడి <strong>Export</strong> బటన్ మీ డేటాను ఎగుమతి చేస్తుంది <span class="badge diamond">Diamond</span>.</li>
<li><strong>అన్ని కలెక్షన్లు (N)</strong> — మీ కలెక్షన్ల జాబితా, <strong>సార్ట్ మెనూ</strong> (పేరు A–Z / Z–A, సృష్టి పాతది/కొత్తది — గుర్తుంచుకోబడుతుంది) మరియు <strong>బల్క్ అప్‌డేట్</strong> షార్ట్‌కట్ <span class="badge diamond">Diamond</span> తో.</li>
<li><strong>శోధన</strong> — మీకు 5 లేదా అంతకంటే ఎక్కువ కలెక్షన్లు ఉన్నప్పుడు ఆటోమేటిక్‌గా కనిపిస్తుంది; కలెక్షన్ పేరు లేదా ప్రాంతం ద్వారా శోధిస్తుంది.</li>
<li><strong>కలెక్షన్ కార్డులు</strong> — పేరు, ప్రాంతం, యాక్టివ్ లోన్ల సంఖ్య, మరియు బాకీ బ్యాలెన్స్. మూలలోని బ్యాడ్జ్ వసూలు రోజు (వారానికి రకాలకు) లేదా రకాన్ని చూపిస్తుంది. కలెక్షన్ తెరవడానికి నొక్కండి.</li>
<li><strong>కొత్త కలెక్షన్</strong> బటన్ — కలెక్షన్ సృష్టిస్తుంది (Base ప్లాన్‌లో 5 వరకు; Premium/Diamond లో అపరిమితం).</li>
</ul>
<div class="callout"><span class="ico">🔒</span><p><strong>ప్రైవసీ మోడ్:</strong> ఆన్ చేసినప్పుడు (భద్రత విభాగం చూడండి), డాష్‌బోర్డ్ మరియు ట్రాకర్లలోని అన్ని మొత్తాలు <code>* * * * *</code> గా కనిపిస్తాయి.</p></div>`
    },
    {
      id: 'collections', num: 5, title: 'కలెక్షన్లు',
      html: `
<p>ఒక కస్టమర్ల గ్రూప్ <em>ఎలా</em> తిరిగి చెల్లిస్తుందో కలెక్షన్ నిర్ణయిస్తుంది.</p>

<h3>కలెక్షన్ రకాలు</h3>
<div class="table-wrap"><table>
<thead><tr><th>రకం</th><th>EMI సైకిల్</th><th>వడ్డీ లెక్కింపు</th><th>ముగింపు తేదీ</th></tr></thead>
<tbody>
<tr><td><strong>రోజువారీ</strong></td><td>ప్రతి రోజు</td><td><code>loan amount × rate ÷ 100</code> (ఫ్లాట్, ముందుగానే)</td><td>ప్రారంభం + వాయిదాలు (రోజులు)</td></tr>
<tr><td><strong>వారానికి</strong></td><td>ప్రతి వారం (వసూలు రోజు ఎంచుకోండి)</td><td>రోజువారీ లాగానే</td><td>ప్రారంభం + వాయిదాలు (వారాలు)</td></tr>
<tr><td><strong>రెండు వారాలకు</strong></td><td>ప్రతి 2 వారాలకు (ఒక రోజు ఎంచుకోండి)</td><td>రోజువారీ లాగానే</td><td>ప్రారంభం + వాయిదాలు × 2 (వారాలు)</td></tr>
<tr><td><strong>కస్టమ్ వీక్లీ</strong></td><td>ప్రతి వారం (ఒక రోజు ఎంచుకోండి)</td><td><code>rate × installments</code> (రేటు అంటే ప్రతి వాయిదాకు 100 కి చెల్లించే మొత్తం)</td><td>ప్రారంభం + వాయిదాలు (వారాలు)</td></tr>
<tr><td><strong>నెలవారీ</strong></td><td>ప్రతి నెల</td><td><code>rate × installments</code></td><td>ప్రారంభం + వాయిదాలు (నెలలు)</td></tr>
<tr><td><strong>నెలవారీ (వడ్డీ)</strong></td><td>ప్రతి నెల</td><td>వడ్డీ-మాత్రమే EMI లు: ప్రతి EMI = వడ్డీ మొత్తం; అసలు మొత్తం సెటిల్ అయ్యే వరకు బ్యాలెన్స్‌గా ఉంటుంది</td><td>ప్రారంభం + వాయిదాలు (నెలలు)</td></tr>
</tbody></table></div>
<div class="callout"><span class="ico">⭐</span><p><strong>నెలవారీ (వడ్డీ)</strong> కలెక్షన్లకు Premium ప్లాన్ అవసరం, ఇవి బల్క్ అప్‌డేట్‌లో అందుబాటులో ఉండవు.</p></div>

<h3>కలెక్షన్ సృష్టించడం</h3>
<ol>
<li>డాష్‌బోర్డ్ → <strong>కొత్త కలెక్షన్</strong>.</li>
<li><strong>కలెక్షన్ పేరు</strong> మరియు <strong>ప్రాంతం పేరు</strong> నమోదు చేయండి.</li>
<li><strong>కలెక్షన్ రకం</strong> ఎంచుకోండి; వారానికి రకాలకు <strong>వసూలు రోజు</strong> (సోమవారం–ఆదివారం) కూడా ఎంచుకోండి.</li>
<li><strong>వడ్డీ రేటు (100 కి మొత్తం)</strong>, ఐచ్ఛిక <strong>ప్రాసెసింగ్ ఫీజు</strong>, <strong>ప్రారంభంలోనే వడ్డీ తీసుకోవాలా</strong> (ఇచ్చే మొత్తం నుండి వడ్డీ మినహాయించబడుతుంది), మరియు డిఫాల్ట్ <strong>వాయిదాల సంఖ్య</strong> సెట్ చేయండి.</li>
<li>అవసరమైతే <strong>నోట్స్</strong> జోడించి <strong>Save</strong> చేయండి. ఈ కలెక్షన్‌లోని కొత్త లోన్లు ఈ విలువలను ముందుగా నింపుతాయి (ప్రతి లోన్‌కు విడిగా మార్చుకోవచ్చు).</li>
</ol>

<h3>కలెక్షన్ లోపల</h3>
<ul>
<li><strong>హెడర్ కార్డ్</strong> — ఈరోజు సారాంశం, మొత్తం బ్యాలెన్స్, మొత్తాలను దాచడానికి/చూపించడానికి <strong>కన్ను బటన్</strong> (పాస్‌కోడ్ లాక్ ఆన్‌లో ఉంటే పాస్‌కోడ్ అవసరం), మరియు <strong>View CashFlow</strong> <span class="badge premium">Premium</span>.</li>
<li><strong>పై బార్</strong> — <strong>కస్టమర్ మ్యాప్</strong> బటన్ <span class="badge diamond">Diamond</span>, <strong>రిపోర్టులు</strong> బటన్ <span class="badge premium">Premium</span>, మరియు <strong>⋮ మెనూ</strong>: కలెక్షన్ మార్చు, కలెక్షన్ తొలగించు, <strong>కస్టమర్లను క్రమం మార్చు</strong> <span class="badge diamond">Diamond</span> (కస్టమర్లను మీ ఇంటింటి రూట్ క్రమంలోకి లాగండి), రిపోర్టులు.</li>
<li><strong>ట్యాబ్‌లు</strong> — యాక్టివ్ / ఇనాక్టివ్ / అన్ని కస్టమర్లు.</li>
<li><strong>ఫిల్టర్ చిప్‌లు</strong> (యాక్టివ్ ట్యాబ్) — <strong>అన్నీ · n</strong>, <strong>ఈరోజు గడువు · n</strong>, <strong>బకాయి · n</strong> ప్రత్యక్ష లెక్కలతో. జాబితాను ఫిల్టర్ చేయడానికి నొక్కండి.</li>
<li><strong>సార్ట్</strong> — సార్ట్ బటన్‌లో కస్టమ్ ఆర్డర్ (మీ క్రమం), పేరు A–Z, పేరు Z–A ఉంటాయి. ఎంపిక ప్రతి కలెక్షన్‌కు గుర్తుంచుకోబడుతుంది.</li>
<li><strong>శోధన</strong> — భూతద్దం నొక్కితే శోధన పెట్టె తెరుచుకుంటుంది (ఇనాక్టివ్/అన్నీ ట్యాబ్‌లలో ఎప్పుడూ కనిపిస్తుంది).</li>
<li><strong>కస్టమర్ కార్డులు</strong> — ఫోటో, పేరు, ప్రాంతం, ఫోన్ (కాల్ చేయడానికి ఫోన్ ఐకాన్ నొక్కండి), లోన్ మొత్తం, EMI, గడువు తేదీ, మరియు మిగిలిన బ్యాలెన్స్. <strong>+</strong> బటన్ జాబితా నుండే నేరుగా EMI నమోదు చేస్తుంది <span class="badge premium">Premium</span>.</li>
<li><strong>కొత్త కస్టమర్</strong> బటన్ — Base ప్లాన్‌లో కలెక్షన్‌కు 20 కస్టమర్లు; Premium/Diamond లో అపరిమితం.</li>
</ul>`
    },
    {
      id: 'customers', num: 6, title: 'కస్టమర్లు',
      html: `
<h3>కస్టమర్‌ను జోడించడం</h3>
<ol>
<li>ఒక కలెక్షన్ తెరవండి → <strong>కొత్త కస్టమర్</strong>.</li>
<li><strong>ఫోటో</strong> జోడించండి (కెమెరా లేదా గ్యాలరీ, క్రాప్ చేయబడుతుంది) — ఐచ్ఛికం.</li>
<li><strong>కస్టమర్ పేరు</strong> (తప్పనిసరి), ఫోన్, e-mail, చిరునామా నమోదు చేయండి.
<ul><li>పై బార్‌లోని <strong>కాంటాక్ట్స్ నుండి దిగుమతి</strong> బటన్‌తో మీ ఫోన్‌బుక్ నుండి పేరు/ఫోన్ నింపవచ్చు.</li></ul></li>
<li><strong>కస్టమర్ లొకేషన్</strong> — <strong>మ్యాప్ పికర్</strong> తెరవడానికి ఫీల్డ్‌ను నొక్కండి:
<ul>
<li>ఎరుపు మధ్య పిన్ కింద మ్యాప్‌ను కదిలించండి, లేదా</li>
<li>నగరం/ప్రాంతం/గుర్తింపు స్థలాన్ని <strong>శోధించండి</strong>, లేదా</li>
<li>మీరు నిలబడిన చోటుకు వెళ్ళడానికి <strong>my-location</strong> బటన్ నొక్కండి (లొకేషన్ అనుమతి ఒకసారి అడుగుతుంది).</li>
<li><strong>Confirm Location</strong> నొక్కండి. కోఆర్డినేట్లు ఫీల్డ్‌లో కనిపిస్తాయి; ✕ వాటిని తొలగిస్తుంది.</li>
</ul></li>
<li><strong>SMS నోటిఫికేషన్లు</strong> టోగుల్ — ఆన్‌లో ఉంటే (మరియు ఫోన్ నంబర్ ఉంటే), లోన్లు మరియు EMI ల తర్వాత యాప్ WhatsApp/SMS రసీదులను అందిస్తుంది.</li>
<li><strong>Save Customer Details</strong>.</li>
</ol>

<h3>కస్టమర్ వివరాల స్క్రీన్</h3>
<ul>
<li>ప్రొఫైల్ కార్డ్: ఫోటో, పేరు, ఫోన్, చిరునామా, మరియు <strong>కస్టమర్ లొకేషన్‌కు నావిగేట్</strong> <span class="badge diamond">Diamond</span> — లొకేషన్ సేవ్ చేసి ఉంటే మీ మ్యాప్స్ యాప్‌లో మలుపు-మలుపు దిశలను తెరుస్తుంది.</li>
<li>యాక్టివ్ లోన్ యొక్క లోన్ అవలోకనం: ప్రోగ్రెస్ బార్, మొత్తం/చెల్లించినది/బ్యాలెన్స్ టైల్స్, EMI మొత్తం మరియు తదుపరి గడువు తేదీ, తిరిగి చెల్లింపు చరిత్ర, మరియు <strong>తిరిగి చెల్లింపు షెడ్యూల్</strong>.</li>
<li>పై బార్: లోన్ స్టేట్‌మెంట్ PDF ను <strong>షేర్</strong> మరియు <strong>డౌన్‌లోడ్</strong> చేయడం <span class="badge premium">Premium</span>, మరియు <strong>⋮ మెనూ</strong>: కస్టమర్ మార్చు, <strong>లోన్ మార్చు</strong>, కస్టమర్ తొలగించు, లోన్ తొలగించు.</li>
<li>కింద ఉన్న <strong>Add EMI</strong> బటన్ చెల్లింపును నమోదు చేస్తుంది.</li>
<li>యాక్టివ్ లోన్ లేని కస్టమర్లకు బదులుగా <strong>కొత్త లోన్</strong> కనిపిస్తుంది.</li>
</ul>`
    },
    {
      id: 'loans', num: 7, title: 'లోన్లు',
      html: `
<h3>లోన్ సృష్టించడం</h3>
<ol>
<li>కస్టమర్ వివరాలు → <strong>కొత్త లోన్</strong>.</li>
<li>ఫారం కలెక్షన్ నుండి ముందుగా నింపబడుతుంది (వడ్డీ రేటు, వాయిదాలు, ఛార్జీలు). <strong>లోన్ మొత్తం</strong> నమోదు చేసి, ప్రారంభ తేదీతో సహా అవసరమైనవి సర్దుబాటు చేయండి.</li>
<li>ప్రివ్యూ కోసం <strong>Calculate</strong> నొక్కండి: ఇచ్చిన మొత్తం, మొత్తం వడ్డీ, తిరిగి చెల్లించాల్సిన మొత్తం, EMI మొత్తం, మరియు ముగింపు తేదీ.</li>
<li><strong>Save</strong>. కస్టమర్‌కు ఫోన్ నంబర్ ఉండి SMS ఆన్‌లో ఉంటే, <strong>Send Receipt</strong> షీట్ WhatsApp / SMS / ప్రింట్ ఎంపికలను అందిస్తుంది.</li>
</ol>
<p>లెక్క సంక్షిప్తంగా: కలెక్షన్ రకం ప్రకారం వడ్డీ లెక్కించబడుతుంది (కలెక్షన్ల విభాగంలోని పట్టిక చూడండి); "ప్రారంభంలో వడ్డీ" ఆన్‌లో ఉంటే, ఇచ్చే నగదు నుండి వడ్డీ మినహాయించబడుతుంది; EMI = మొత్తం ÷ వాయిదాలు.</p>

<h3>లోన్ నిర్వహణ</h3>
<ul>
<li><strong>లోన్ మార్చు</strong> (కస్టమర్ వివరాలలోని ⋮ మెనూ) — మొత్తాలు/రేటు/వాయిదాలు మార్చండి; <strong>చెల్లించిన మొత్తం మరియు ప్రస్తుత గడువు తేదీని అలాగే ఉంచి</strong> మళ్ళీ లెక్కిస్తుంది. ఇప్పటికే చెల్లించిన దానికంటే తక్కువ కొత్త మొత్తాన్ని యాప్ అనుమతించదు.</li>
<li><strong>లోన్ మూసివేయి</strong> — మాన్యువల్‌గా సెటిల్ అయినట్లు గుర్తించండి (బ్యాలెన్స్ సున్నా అయినప్పుడు ఆటోమేటిక్‌గా కూడా మూసివేయబడుతుంది).</li>
<li><strong>మూసివేసిన లోన్లు</strong> — ప్రతి కస్టమర్ యొక్క పాత లోన్లు View Closed Loans కింద జాబితా చేయబడతాయి, PDF షేర్/డౌన్‌లోడ్‌తో <span class="badge premium">Premium</span>.</li>
<li><strong>తిరిగి చెల్లింపు షెడ్యూల్</strong> — పూర్తి వాయిదాల పట్టిక; పై బార్ నుండి PDF గా షేర్ చేయండి.</li>
</ul>`
    },
    {
      id: 'collecting-emis', num: 8, title: 'EMI ల వసూలు',
      html: `
<p>చెల్లింపును నాలుగు విధాలుగా నమోదు చేయవచ్చు:</p>

<h3>a) కస్టమర్ స్క్రీన్ నుండి</h3>
<p>కస్టమర్ వివరాలు → <strong>Add EMI</strong> → తేదీ (డిఫాల్ట్‌గా ఈరోజు), మొత్తం (బ్యాలెన్స్ వరకు మాత్రమే), మరియు నగదు/<strong>ఆన్‌లైన్</strong> చెల్లింపు విధానం → Save. బ్యాలెన్స్, చెల్లించిన మొత్తం, మరియు తదుపరి గడువు తేదీ ఆటోమేటిక్‌గా అప్‌డేట్ అవుతాయి; బ్యాలెన్స్ సున్నా అయినప్పుడు లోన్ మూసివేయబడుతుంది. తర్వాత రసీదు షీట్ వస్తుంది (కస్టమర్‌కు SMS ఆన్‌లో ఉంటే).</p>

<h3>b) కలెక్షన్ జాబితా నుండి క్విక్-పే <span class="badge premium">Premium</span></h3>
<p>కలెక్షన్ జాబితాలోని కస్టమర్ కార్డ్‌పై <strong>+</strong> నొక్కండి — జాబితా వదలకుండానే అదే EMI షీట్.</p>

<h3>c) డైలీ కలెక్షన్ ట్రాకర్</h3>
<p>డాష్‌బోర్డ్ అలర్ట్ విడ్జెట్ లేదా <strong>సెట్టింగ్‌లు → డైలీ కలెక్షన్ ట్రాకర్</strong>.</p>
<ul>
<li>ఈరోజుకు <strong>వసూలైనది vs లక్ష్యం</strong> ప్రోగ్రెస్.</li>
<li><strong>బకాయి EMI లు</strong> (ఎరుపు) మరియు <strong>ఈరోజు గడువు EMI లు</strong> జాబితాలు — ప్రతి వరుసలో కస్టమర్, కలెక్షన్, EMI మొత్తం, గడువు తేదీ, మరియు EMI షీట్ తెరిచే <strong>Collect</strong> బటన్ ఉంటాయి.</li>
</ul>

<h3>d) బల్క్ అప్‌డేట్ <span class="badge diamond">Diamond</span></h3>
<p>డాష్‌బోర్డ్ → <strong>బల్క్ అప్‌డేట్</strong> చిప్:</p>
<ol>
<li><strong>తేదీ</strong> (పై బార్) మరియు <strong>కలెక్షన్</strong> ఎంచుకోండి (నెలవారీ-వడ్డీ కలెక్షన్లు మినహాయించబడతాయి).</li>
<li>ప్రతి యాక్టివ్ లోన్ ముందుగా నింపిన EMI మొత్తంతో జాబితా అవుతుంది (⋮ మెనూలో <strong>Pre-fill EMI Amount</strong> టోగుల్ చేయండి). మొత్తాలను సర్దుబాటు చేసి, ప్రతి వరుసకు నగదు/ఆన్‌లైన్ ఎంచుకుని, కస్టమర్లను విడిగా లేదా <strong>Select All</strong> తో ఎంచుకోండి.</li>
<li>కింది బార్ మీ ఎంపిక మొత్తాన్ని చూపిస్తుంది — <strong>Update Entries</strong> నొక్కి → నిర్ధారించండి. అన్ని వాయిదాలు ఒకేసారి సేవ్ అవుతాయి.</li>
</ol>`
    },
    {
      id: 'customer-map', num: 9, title: 'కస్టమర్ మ్యాప్',
      html: `
<p><span class="badge diamond">Diamond</span> ఒక కలెక్షన్ తెరవండి → పై బార్‌లోని <strong>లొకేషన్ ఐకాన్</strong>.</p>
<ul>
<li>లొకేషన్ సేవ్ చేసిన ప్రతి కస్టమర్ OpenStreetMap వ్యూలో <strong>వారి పేరుతో ఎరుపు పిన్</strong> గా కనిపిస్తారు.</li>
<li>మ్యాప్ అన్ని పిన్‌లను ఆటోమేటిక్‌గా ఫ్రేమ్ చేస్తుంది; <strong>⛶ బటన్</strong> ఎప్పుడైనా మళ్ళీ ఫ్రేమ్ చేస్తుంది. కింది చిప్ మ్యాప్‌లోని కస్టమర్లను లెక్కిస్తుంది.</li>
<li><strong>ఒక పిన్ నొక్కండి</strong> → కస్టమర్ పేరు, <strong>ప్రస్తుత బ్యాలెన్స్</strong>, మరియు <strong>Open in Maps</strong> (మీ మ్యాప్స్ యాప్‌లో ఆ స్థలాన్ని చూపిస్తుంది) ఉన్న కార్డ్. మూసివేయడానికి వేరే చోట నొక్కండి.</li>
<li>రూట్లను ప్లాన్ చేయడానికి మరియు మీ వసూలు లైన్‌ను భౌగోళికంగా చూడటానికి దీన్ని వాడండి. (మ్యాప్ టైల్స్ కోసం ఇంటర్నెట్ అవసరం; చూసిన ప్రాంతాలు క్యాష్ అవుతాయి.)</li>
</ul>`
    },
    {
      id: 'cashflow-book', num: 10, title: 'క్యాష్‌ఫ్లో బుక్',
      html: `
<p><span class="badge premium">Premium</span> ప్రతి కలెక్షన్‌కు రోజువారీ నగదు కదలికను ట్రాక్ చేయండి: కలెక్షన్ వివరాలు → <strong>View CashFlow</strong> → <strong>Add Book Entry</strong>.</p>
<ol>
<li>తేదీ ఎంపిక కార్డ్‌తో <strong>తేదీ</strong> ఎంచుకోండి.</li>
<li><strong>రాబడి</strong> (ప్రారంభ బ్యాలెన్స్, వచ్చిన నగదు, వసూలు మొత్తం, వచ్చిన వడ్డీ, ఇతరాలు) మరియు <strong>ఖర్చు</strong> (లోన్ డిపాజిట్లు, పెట్రోల్, భోజనం, వాహనం, ఇతరాలు) మొత్తాలను నమోదు చేయండి. సారాంశ కార్డ్ ప్రారంభం / రాబడి / ఖర్చు / ముగింపును ప్రత్యక్షంగా చూపిస్తుంది.</li>
<li><strong>మొత్తం ఆదాయం / మొత్తం ఖర్చు</strong> మరియు <strong>ముగింపు బ్యాలెన్స్</strong> సమీక్షించండి.</li>
<li>ఐచ్ఛిక <strong>నోట్</strong> జోడించి Save చేయండి.</li>
</ol>
<p>ఎంట్రీలు తేదీ వారీగా ఆదాయం, ఖర్చు, ప్రారంభ/ముగింపు బ్యాలెన్స్‌లు మరియు మీ నోట్‌తో జాబితా అవుతాయి. మార్చడానికి కుడివైపు, తొలగించడానికి ఎడమవైపు స్వైప్ చేయండి.</p>`
    },
    {
      id: 'reports-export', num: 11, title: 'రిపోర్టులు & ఎగుమతి',
      html: `
<h3>కలెక్షన్ రిపోర్టులు <span class="badge premium">Premium</span></h3>
<p>కలెక్షన్ వివరాలు → రిపోర్టుల నుండి తెరుచుకుంటుంది (PDF డౌన్‌లోడ్‌కు Premium అవసరం).</p>
<ul>
<li>పై బార్‌లో <strong>నెలవారీ / వారానికి టోగుల్</strong>; బాణాలు నెలలు/వారాల మధ్య కదులుతాయి.</li>
<li><strong>క్యాలెండర్</strong> కొత్త లోన్లు లేదా వసూళ్లు జరిగిన రోజులను గుర్తిస్తుంది. <strong>ఒక రోజు నొక్కితే</strong> రోజు సారాంశ షీట్: మొత్తాలు అలాగే ఆ రోజు లోన్లు మరియు వాయిదాల జాబితాలు, రోజువారీ PDF డౌన్‌లోడ్‌తో.</li>
<li>క్యాలెండర్ కింద: ఆ కాలం యొక్క <strong>సారాంశం</strong> (కొత్త పెట్టుబడులు, వడ్డీ, మొత్తం లోన్లు, మొత్తం వసూలు, లెక్కలు) మరియు పూర్తి <strong>కొత్త లోన్లు</strong> మరియు <strong>వాయిదాలు</strong> జాబితాలు.</li>
<li><strong>డౌన్‌లోడ్ బటన్</strong> నెల/వారం రిపోర్టును PDF గా ఎగుమతి చేస్తుంది <span class="badge premium">Premium</span>.</li>
</ul>

<h3>అడ్వాన్స్‌డ్ రిపోర్టులు <span class="badge diamond">Diamond</span></h3>
<p><strong>సెట్టింగ్‌లు → అడ్వాన్స్‌డ్ రిపోర్టులు</strong>: లోతైన వ్యాపార విశ్లేషణలు.</p>

<h3>Excel/CSV కు ఎగుమతి <span class="badge diamond">Diamond</span></h3>
<p>డాష్‌బోర్డ్ → మొత్తం బ్యాలెన్స్ కార్డ్‌పై <strong>Export</strong>. <strong>అన్ని కలెక్షన్లను</strong> ఒకేసారి లేదా ఏదైనా ఒక్క కలెక్షన్‌ను ఎగుమతి చేయండి. స్ప్రెడ్‌షీట్‌కు అనుకూలమైన <strong>CSV</strong> ఫైల్ (కస్టమర్, చిరునామా, ఫోన్, ఇచ్చిన లోన్, వడ్డీ, మొత్తం, EMI, బ్యాలెన్స్) <code>Documents/Vasool Collection Tracker/Export</code> లో సేవ్ అయి ఆటోమేటిక్‌గా తెరుచుకుంటుంది.</p>`
    },
    {
      id: 'receipts-printing', num: 12, title: 'రసీదులు & థర్మల్ ప్రింటింగ్',
      html: `
<h3>WhatsApp / SMS రసీదులు</h3>
<p>లోన్ సృష్టించిన తర్వాత లేదా EMI నమోదు చేసిన తర్వాత (ఫోన్ నంబర్ మరియు SMS ఆన్‌లో ఉన్న కస్టమర్లకు), <strong>Send Receipt</strong> షీట్ ఇవి అందిస్తుంది:</p>
<ul>
<li><strong>WhatsApp</strong> — కస్టమర్ నంబర్‌కు ముందే రాసిన రసీదు సందేశాన్ని తెరుస్తుంది.</li>
<li><strong>SMS</strong> — మీ SMS యాప్ ద్వారా అదే సందేశం.</li>
<li>రసీదు వచనం మీ <strong>SMS భాష</strong> సెట్టింగ్‌ను అనుసరిస్తుంది (ఉదా., తమిళం).</li>
</ul>

<h3>థర్మల్ ప్రింటర్ (Bluetooth ESC/POS)</h3>
<ol>
<li><strong>సెట్టింగ్‌లు → థర్మల్ ప్రింటర్</strong> → <strong>Enable Thermal Printer</strong> ఆన్ చేయండి.</li>
<li>Bluetooth అనుమతి ఇచ్చి, Android Bluetooth సెట్టింగ్‌లలో మీ ప్రింటర్‌ను పెయిర్ చేసి, పెయిర్ చేసిన పరికరాల జాబితాలో దాని పక్కన <strong>Connect</strong> నొక్కండి. తనిఖీ కోసం <strong>Test Print</strong> వాడండి.</li>
<li>ఆన్ చేసి <em>మరియు కనెక్ట్ అయిన</em> తర్వాత, లోన్లు మరియు EMI ల తర్వాత Send Receipt షీట్‌లో <strong>Print Receipt</strong> ఎంపిక కనిపిస్తుంది.</li>
</ol>`
    },
    {
      id: 'backup-restore', num: 13, title: 'బ్యాకప్ & రీస్టోర్',
      html: `
<p>మీ డేటా ఫోన్‌లోనే ఉంటుంది — బ్యాకప్‌లను తప్పకుండా తీసుకోండి.</p>

<h3>మాన్యువల్ బ్యాకప్ <span class="badge premium">Premium</span></h3>
<p><strong>సెట్టింగ్‌లు → BackUp &amp; Restore</strong>:</p>
<ul>
<li><strong>Download Backup</strong> — పూర్తి బ్యాకప్ <code>.zip</code> ను మీ ఫోన్‌లో ఎక్కడైనా సేవ్ చేయండి.</li>
<li><strong>Restore BackUp Data</strong> — అన్నింటినీ రీస్టోర్ చేయడానికి బ్యాకప్ <code>.zip</code> ఎంచుకోండి.</li>
<li><strong>Backup &amp; Share</strong> — బ్యాకప్ సృష్టించి షేర్ చేయండి (WhatsApp, ఇమెయిల్, Drive…).</li>
<li><strong>Backup to Google Drive</strong> — కింద చూడండి.</li>
</ul>

<h3>Google Drive బ్యాకప్</h3>
<ul>
<li>మీ Google ఖాతాతో <strong>Connect Google Drive</strong> చేసి, తర్వాత ఎప్పుడైనా <strong>Backup now</strong> చేయండి.</li>
<li><strong>Enable Auto Backup</strong> <span class="badge diamond">Diamond</span> — మీ Drive కు <strong>ఆటోమేటిక్‌గా రోజుకు ఒకసారి</strong> బ్యాకప్ చేస్తుంది (ఇంటర్నెట్ అవసరం; ఆన్ చేయగానే మొదటి బ్యాకప్ వెంటనే నడుస్తుంది).</li>
</ul>

<h3>కొత్త ఫోన్‌లో రీస్టోర్ చేయడం</h3>
<p>Vasool Collection Tracker ఇన్‌స్టాల్ చేయండి → స్వాగత స్క్రీన్‌లో <strong>"Already have a backup? click here to Restore"</strong> నొక్కండి → మీ <code>.zip</code> ఎంచుకోండి. అన్నీ (కలెక్షన్లు, కస్టమర్లు, లోన్లు, చరిత్ర) తిరిగి వస్తాయి.</p>`
    },
    {
      id: 'security', num: 14, title: 'భద్రత',
      html: `
<p>అన్నీ <strong>సెట్టింగ్‌లు</strong> మరియు <strong>సెట్టింగ్‌లు → వినియోగదారు ప్రాధాన్యతలు</strong> కింద:</p>
<ul>
<li><strong>బయోమెట్రిక్ లాక్</strong> (సెట్టింగ్‌లు → భద్రత) — యాప్ తెరిచిన ప్రతిసారీ వేలిముద్ర/ముఖం (లేదా పరికర PIN) అవసరం.</li>
<li><strong>పాస్‌కోడ్ లాక్</strong> (వినియోగదారు ప్రాధాన్యతలు → భద్రత) — ప్రైవేట్ 4-అంకెల పాస్‌కోడ్ సెట్ చేయండి. ఆన్ చేసిన తర్వాత, వీటికి పాస్‌కోడ్ అవసరం:
<ul>
<li>బయోమెట్రిక్ లాక్ ఆన్/ఆఫ్ చేయడానికి,</li>
<li><strong>ప్రైవసీ మోడ్</strong> టోగుల్ చేయడానికి (కలెక్షన్లలోని కన్ను బటన్‌తో సహా),</li>
<li>పాస్‌కోడ్‌ను ఆఫ్ చేయడానికి లేదా <strong>మార్చడానికి</strong> (ఆన్ చేసిన తర్వాత Change Passcode వరుస కనిపిస్తుంది).</li>
</ul></li>
<li><strong>ప్రైవసీ మోడ్</strong> — యాప్‌లోని ప్రతి మొత్తాన్ని <code>* * * * *</code> గా మారుస్తుంది. ఎవరైనా మీ భుజం మీదుగా చూసినప్పుడు చాలా ఉపయోగం; అసలు అంకెలు చూడటానికి దాన్ని (పాస్‌కోడ్ సెట్ చేసి ఉంటే పాస్‌కోడ్‌తో) మార్చండి.</li>
</ul>
<div class="callout tip"><span class="ico">🆘</span><p>పాస్‌కోడ్ మర్చిపోయారా? <strong>సెట్టింగ్‌లు → సపోర్ట్‌ను సంప్రదించండి</strong> నుండి సంప్రదించండి — వారు మీకు తిరిగి యాక్సెస్ పొందడంలో సహాయపడతారు.</p></div>`
    },
    {
      id: 'settings-preferences', num: 15, title: 'సెట్టింగ్‌లు & ప్రాధాన్యతలు',
      html: `
<p><strong>సెట్టింగ్‌లు</strong> (డాష్‌బోర్డ్‌పై గేర్ ఐకాన్):</p>
<div class="table-wrap"><table>
<thead><tr><th>అంశం</th><th>ఏమి చేస్తుంది</th></tr></thead>
<tbody>
<tr><td>కంపెనీ వివరాలు</td><td>సంస్థ సమాచారం, లోగో, కరెన్సీ, నియమాలు &amp; షరతులు మార్చండి</td></tr>
<tr><td>సబ్‌స్క్రిప్షన్ అప్‌గ్రేడ్</td><td>ప్లాన్లు &amp; చెల్లింపు (సబ్‌స్క్రిప్షన్ ప్లాన్ల విభాగం చూడండి)</td></tr>
<tr><td>అనలిటిక్స్</td><td>వ్యాపార విశ్లేషణల అవలోకనం</td></tr>
<tr><td>అడ్వాన్స్‌డ్ రిపోర్టులు <span class="badge diamond">Diamond</span></td><td>లోతైన రిపోర్టులు</td></tr>
<tr><td>డైలీ కలెక్షన్ ట్రాకర్</td><td>ఈరోజు గడువు/బకాయి వసూలు జాబితా</td></tr>
<tr><td>వినియోగదారు ప్రాధాన్యతలు</td><td>కింద చూడండి</td></tr>
<tr><td>థర్మల్ ప్రింటర్</td><td>ప్రింటర్ సెటప్ (రసీదులు &amp; థర్మల్ ప్రింటింగ్ చూడండి)</td></tr>
<tr><td>బయోమెట్రిక్ లాక్</td><td>యాప్ లాక్ టోగుల్</td></tr>
<tr><td>BackUp &amp; Restore <span class="badge premium">Premium</span></td><td>లోకల్ &amp; Drive బ్యాకప్‌లు</td></tr>
<tr><td>సపోర్ట్‌ను సంప్రదించండి / రేట్ చేయండి / రివ్యూ / ఫీచర్‌ను సూచించండి / రెఫర్ &amp; సంపాదించండి</td><td>సపోర్ట్ మరియు అభిప్రాయం</td></tr>
<tr><td>సేవా నియమాలు / గోప్యతా విధానం</td><td>చట్టపరమైన పత్రాలు</td></tr>
</tbody></table></div>

<p><strong>వినియోగదారు ప్రాధాన్యతలు:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>అంశం</th><th>ఏమి చేస్తుంది</th></tr></thead>
<tbody>
<tr><td>యాప్ భాష</td><td>English, தமிழ், हिंदी, తెలుగు, ಕನ್ನಡ, മലയാളം — వెంటనే వర్తిస్తుంది</td></tr>
<tr><td>థీమ్</td><td>సిస్టమ్ / లైట్ / డార్క్</td></tr>
<tr><td>కరెన్సీ</td><td>యాప్ అంతటా వాడే కరెన్సీ గుర్తు</td></tr>
<tr><td>ప్రైవసీ మోడ్</td><td>అన్ని మొత్తాలను దాచుతుంది</td></tr>
<tr><td>EMI రిమైండర్ నోటిఫికేషన్లు</td><td>ప్రతిరోజూ 9:00 AM కు రిమైండర్ (నోటిఫికేషన్లు చూడండి)</td></tr>
<tr><td>EMI తేదీని సమయంతో చూపించు</td><td>తిరిగి చెల్లింపు చరిత్ర నమోదైన ఖచ్చితమైన సమయాన్ని చూపిస్తుంది</td></tr>
<tr><td>పాస్‌కోడ్ లాక్ / పాస్‌కోడ్ మార్చు</td><td>4-అంకెల రక్షణ (భద్రత చూడండి)</td></tr>
</tbody></table></div>`
    },
    {
      id: 'notifications', num: 16, title: 'నోటిఫికేషన్లు',
      html: `
<p>వినియోగదారు ప్రాధాన్యతలలో <strong>EMI రిమైండర్ నోటిఫికేషన్లు</strong> ఆన్ చేయండి. ప్రతిరోజూ <strong>9:00 AM</strong> కు యాప్ మీ లోన్లను తనిఖీ చేసి, వసూలు చేయాల్సినవి ఉన్నప్పుడు మాత్రమే మీకు తెలియజేస్తుంది:</p>
<ul>
<li><em>"ఈరోజు N EMI (లు) గడువు • M బకాయి లోన్ (లు) పెండింగ్"</em></li>
<li><em>"బకాయి EMI అలర్ట్ — N లోన్ (లకు) బకాయి చెల్లింపులు ఉన్నాయి. సమీక్షించడానికి నొక్కండి."</em></li>
</ul>
<p>నోటిఫికేషన్ నొక్కితే యాప్ తెరుచుకుంటుంది. నోటిఫికేషన్ అనుమతి ఇచ్చారని నిర్ధారించుకోండి (మొదటి ప్రారంభంలో అడగబడుతుంది; లేకపోతే Android సెట్టింగ్‌లలో ఆన్ చేయండి).</p>
<p>యాప్ అప్‌డేట్ల తర్వాత, <strong>What's New</strong> డైలాగ్ ప్రతి వెర్షన్‌కు ఒకసారి తాజా ఫీచర్లను జాబితా చేస్తుంది.</p>`
    },
    {
      id: 'subscription-plans', num: 17, title: 'సబ్‌స్క్రిప్షన్ ప్లాన్లు & ధరలు',
      html: `
<div class="plan-mini-grid">
<div class="plan-mini"><h4>Base</h4><div class="pm-price">₹149<span>/నెల</span></div><div class="pm-year">₹1,499/సంవత్సరం</div></div>
<div class="plan-mini highlight"><h4>Premium</h4><div class="pm-price">₹249<span>/నెల</span></div><div class="pm-year">₹2,499/సంవత్సరం</div></div>
<div class="plan-mini"><h4>Diamond</h4><div class="pm-price">₹299<span>/నెల</span></div><div class="pm-year">₹2,999/సంవత్సరం</div></div>
</div>

<div class="table-wrap"><table>
<thead><tr><th>ఫీచర్</th><th class="center">Base</th><th class="center">Premium</th><th class="center">Diamond</th></tr></thead>
<tbody>
<tr><td>కలెక్షన్లు</td><td class="center">5 వరకు</td><td class="center">అపరిమితం</td><td class="center">అపరిమితం</td></tr>
<tr><td>కలెక్షన్‌కు కస్టమర్లు</td><td class="center">20 వరకు</td><td class="center">అపరిమితం</td><td class="center">అపరిమితం</td></tr>
<tr><td>లోన్లు, EMI నమోదు, డైలీ ట్రాకర్</td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>లోన్ PDF డౌన్‌లోడ్, మూసివేసిన లోన్లు</td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>నెలవారీ (వడ్డీ) కలెక్షన్ రకం</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>కస్టమర్ జాబితా నుండి క్విక్-పే EMI</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>లోన్ PDF షేర్ / PDF పై కంపెనీ లోగో</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>నెలవారీ &amp; వారానికి రిపోర్టులు + PDF లు</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>క్యాష్‌ఫ్లో బుక్</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>మాన్యువల్ బ్యాకప్ &amp; రీస్టోర్</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>బల్క్ EMI అప్‌డేట్</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Excel/CSV కు ఎగుమతి</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>కస్టమర్ల క్రమం మార్చడం (రూట్ క్రమం)</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>రోజువారీ ఆటోమేటిక్ Google Drive బ్యాకప్</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>కస్టమర్ మ్యాప్ &amp; లొకేషన్‌కు నావిగేట్¹</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>అడ్వాన్స్‌డ్ రిపోర్టులు</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>ప్రాధాన్యతా సపోర్ట్</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
</tbody></table></div>
<p style="font-size:13.5px;color:var(--gray);">¹ కస్టమర్ లొకేషన్‌ను <em>సేవ్ చేయడం</em> (కస్టమర్ ఫారంలోని మ్యాప్ పికర్) అన్ని ప్లాన్లలో అందుబాటులో ఉంది; లొకేషన్లను <em>చూడటం</em> — కస్టమర్ మ్యాప్ మరియు నావిగేట్ షార్ట్‌కట్ — కు Diamond అవసరం.</p>

<h3>అప్‌గ్రేడ్ ఎలా చేయాలి</h3>
<p>డాష్‌బోర్డ్ → ప్లాన్ల ఐకాన్, లేదా సెట్టింగ్‌లు → సబ్‌స్క్రిప్షన్ అప్‌గ్రేడ్:</p>
<ul>
<li><strong>Google Play</strong> — వెంటనే, సురక్షితమైన ఇన్-యాప్ కొనుగోలు.</li>
<li><strong>ఆఫ్‌లైన్ ప్లాన్లు</strong> — ఇమెయిల్ ద్వారా వచ్చే కోడ్‌తో యాక్టివేట్ అయ్యే తగ్గింపు వార్షిక/నెలవారీ/ట్రయల్ ప్లాన్లు (కోడ్ కోసం సపోర్ట్‌కు ఇమెయిల్ చేసి, యాక్టివేషన్ స్క్రీన్‌లో నమోదు చేయండి).</li>
<li><strong>UPI</strong> — QR స్కాన్ చేయండి / UPI ID కాపీ చేయండి, చెల్లించి, స్క్రీన్‌షాట్‌ను సపోర్ట్‌తో షేర్ చేయండి; 24 గంటల్లో యాక్టివేషన్.</li>
<li><strong>రెఫర్ &amp; సంపాదించండి</strong> — మీ రెఫరల్ లింక్‌ను షేర్ చేయండి; విజయవంతమైన ప్రతి రెఫరల్‌కు Rs.100 సంపాదించండి.</li>
</ul>`
    },
    {
      id: 'faq', num: 18, title: 'సమస్యల పరిష్కారం & తరచుగా అడిగే ప్రశ్నలు',
      html: `
<details class="faq"><summary>మ్యాప్ ఖాళీగా ఉంది / పిన్‌లు లోడ్ కావడం లేదు.</summary><div class="faq-body"><p>మ్యాప్ టైల్స్‌కు మొదటిసారి ఇంటర్నెట్ అవసరం. మీ కనెక్షన్ తనిఖీ చేయండి; ఇంతకుముందు చూసిన ప్రాంతాలు ఆఫ్‌లైన్‌లో పనిచేస్తాయి.</p></div></details>
<details class="faq"><summary>"ప్రస్తుత లొకేషన్ వాడు" పనిచేయడం లేదు.</summary><div class="faq-body"><p>లొకేషన్ అనుమతి ఇవ్వండి, GPS ఆన్ చేయండి, బహిరంగ ప్రదేశంలో ప్రయత్నించండి. ఇంటి లోపల యాప్ మీ చివరిగా తెలిసిన లొకేషన్‌ను వాడుతుంది.</p></div></details>
<details class="faq"><summary>ఆటో-బ్యాకప్ నడవడం లేదు.</summary><div class="faq-body"><p>దీనికి Diamond ప్లాన్, కనెక్ట్ అయిన Google Drive ఖాతా, ఆన్ చేసిన టోగుల్, మరియు ఇంటర్నెట్ అవసరం. బ్యాకప్‌లు రోజుకు ఒకసారి నడుస్తాయి.</p></div></details>
<details class="faq"><summary>లోన్/EMI సేవ్ చేసిన తర్వాత ప్రింట్ ఎంపిక కనిపించడం లేదు.</summary><div class="faq-body"><p>సెట్టింగ్‌లు → థర్మల్ ప్రింటర్‌లో థర్మల్ ప్రింటింగ్ <strong>ఆన్ చేయాలి</strong> <em>మరియు</em> ఒక ప్రింటర్ ప్రస్తుతం కనెక్ట్ అయి ఉండాలి. అలాగే, ఫోన్ నంబర్ మరియు SMS నోటిఫికేషన్లు ఆన్‌లో ఉన్న కస్టమర్లకు మాత్రమే రసీదు షీట్ కనిపిస్తుంది.</p></div></details>
<details class="faq"><summary>ప్రైవసీ మోడ్ / బయోమెట్రిక్ లాక్ ఆఫ్ చేయలేకపోతున్నాను.</summary><div class="faq-body"><p>పాస్‌కోడ్ లాక్ ఆన్‌లో ఉంది — మీ 4-అంకెల పాస్‌కోడ్ నమోదు చేయండి. మర్చిపోయారా? సపోర్ట్‌ను సంప్రదించండి.</p></div></details>
<details class="faq"><summary>కస్టమర్ EMI కంటే ఎక్కువ చెల్లించారు / ముందే చెల్లించారు.</summary><div class="faq-body"><p>EMI జోడించేటప్పుడు బ్యాలెన్స్ వరకు ఏ మొత్తమైనా నమోదు చేయండి — షెడ్యూల్ మరియు గడువు తేదీ ఆటోమేటిక్‌గా సర్దుబాటు అవుతాయి.</p></div></details>
<details class="faq"><summary>నేను లోన్ మార్చాను — పాత చెల్లింపులకు ఏమవుతుంది?</summary><div class="faq-body"><p>ఏమీ కాదు. నమోదైన వాయిదాలు అలాగే ఉంటాయి; యాప్ బ్యాలెన్స్‌ను కొత్త మొత్తం − ఇప్పటికే చెల్లించినది గా మళ్ళీ లెక్కిస్తుంది, చెల్లించిన మొత్తం కంటే తక్కువ మొత్తాలను అనుమతించదు.</p></div></details>
<details class="faq"><summary>కొత్త ఫోన్‌కు ఎలా మారాలి?</summary><div class="faq-body"><p>పాత ఫోన్: సెట్టింగ్‌లు → BackUp &amp; Restore → Download Backup (లేదా Backup &amp; Share). కొత్త ఫోన్: ఇన్‌స్టాల్ → స్వాగత స్క్రీన్ → Restore → <code>.zip</code> ఎంచుకోండి.</p></div></details>
<details class="faq"><summary>ఇంకేదైనా?</summary><div class="faq-body"><p>సెట్టింగ్‌లు → <strong>సపోర్ట్‌ను సంప్రదించండి</strong> — ఇమెయిల్ (24 గంటల్లో సమాధానం), WhatsApp గ్రూప్, మరియు తమిళ డెమో వీడియో.</p></div></details>
<p style="margin-top:18px;font-size:13.5px;color:var(--gray);"><em>ఈ గైడ్ Vasool Collection Tracker v1.0 ను వివరిస్తుంది. గుర్తించిన విధంగా కొన్ని ఫీచర్లకు Premium లేదా Diamond ప్లాన్ అవసరం.</em></p>`
    }
  ]
};
