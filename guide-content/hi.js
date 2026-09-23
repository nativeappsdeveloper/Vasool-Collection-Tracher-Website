window.GUIDE_CONTENT = {
  lang: 'hi',
  ui: {
    docTitle: 'Vasool Collection Tracker — उपयोगकर्ता गाइड',
    pageTitle: 'Vasool Collection Tracker उपयोगकर्ता गाइड',
    guideLabel: 'उपयोगकर्ता गाइड',
    tagline: 'EMI और वसूली ट्रैक करने के लिए आसान लोन मैनेजर — हर फ़ीचर, उसका उपयोग और ऐप का पूरा फ़्लो।',
    version: 'Vasool Collection Tracker v1.0 पर आधारित',
    contents: 'विषय-सूची',
    backHome: '← होम पर वापस जाएँ',
    pricingLink: 'मूल्य',
    download: 'ऐप डाउनलोड करें',
    footerNote: '© 2026 Vasool Collection Tracker. भारतीय फाइनेंस पेशेवरों के लिए ❤️ से बनाया गया।'
  },
  sections: [
    {
      id: 'what-is-vasool-tracker', num: 1, title: 'Vasool Collection Tracker क्या है?',
      html: `
<p>Vasool Collection Tracker फाइनेंस व्यवसायों और व्यक्तिगत वसूली एजेंटों के लिए एक लोन और कलेक्शन प्रबंधन ऐप है। यह कागज़ की "वसूली" कॉपी की जगह लेता है: आप उधार लेने वालों को <strong>कलेक्शनों</strong> (वसूली लाइनों/रूटों) में व्यवस्थित करते हैं, <strong>लोन</strong> देते हैं, और वसूली करते समय <strong>EMI भुगतान</strong> दर्ज करते हैं — बैलेंस की स्वचालित गणना, नियत तारीख़ की ट्रैकिंग, रसीदें, रिपोर्ट और बैकअप के साथ।</p>
<ul>
<li>पूरी तरह ऑफ़लाइन काम करता है; डेटा आपके फ़ोन पर ही रहता है</li>
<li>6 ऐप भाषाओं में उपलब्ध: English, தமிழ், हिंदी, తెలుగు, ಕನ್ನಡ, മലയാളം</li>
<li>वैकल्पिक Google Drive बैकअप आपके डेटा को सुरक्षित रखता है</li>
</ul>`
    },
    {
      id: 'core-concepts', num: 2, title: 'मूल अवधारणाएँ और ऐप फ़्लो',
      html: `
<div class="table-wrap"><table>
<thead><tr><th>शब्द</th><th>अर्थ</th></tr></thead>
<tbody>
<tr><td><strong>संगठन (Organization)</strong></td><td>आपका व्यवसाय — नाम, फ़ोन, लोगो, मुद्रा। रसीदों और PDF पर दिखाई देता है।</td></tr>
<tr><td><strong>कलेक्शन</strong></td><td>एक ही चक्र पर वसूले जाने वाले ग्राहकों का समूह/लाइन (जैसे "मार्केट स्ट्रीट डेली")। इसमें प्रकार (दैनिक/साप्ताहिक/मासिक…), ब्याज दर और डिफ़ॉल्ट किस्तों की संख्या तय होती है।</td></tr>
<tr><td><strong>ग्राहक</strong></td><td>किसी कलेक्शन के अंदर एक उधारकर्ता — नाम, फ़ोन, फ़ोटो, पता, GPS लोकेशन।</td></tr>
<tr><td><strong>लोन</strong></td><td>ग्राहक को दिया गया पैसा। ऐप कलेक्शन की सेटिंग्स से ब्याज, कुल राशि, EMI राशि और नियत तारीख़ें खुद निकाल लेता है।</td></tr>
<tr><td><strong>EMI / किस्त</strong></td><td>एक अदायगी। इसे दर्ज करते ही चुकाई गई राशि, बैलेंस और अगली नियत तारीख़ अपने आप अपडेट हो जाती है। बैलेंस शून्य होते ही लोन खुद बंद हो जाता है।</td></tr>
</tbody></table></div>

<h3>ऐप फ़्लो</h3>
<div class="flow">
<div class="flow-step"><div class="flow-dot">1</div><div class="flow-body"><h4>पहली बार खोलना और सेटअप</h4><p>स्वागत वॉकथ्रू → कंपनी की जानकारी दर्ज करें (या बैकअप zip रीस्टोर करके सीधे अपने डेटा पर पहुँचें)।</p></div></div>
<div class="flow-step"><div class="flow-dot">2</div><div class="flow-body"><h4>कलेक्शन बनाएँ</h4><p>लाइन तय करें: प्रकार (दैनिक/साप्ताहिक/मासिक…), ब्याज दर और डिफ़ॉल्ट किस्तें।</p></div></div>
<div class="flow-step"><div class="flow-dot">3</div><div class="flow-body"><h4>ग्राहक जोड़ें</h4><p>लाइन के हर उधारकर्ता का नाम, फ़ोन, फ़ोटो, पता और GPS लोकेशन।</p></div></div>
<div class="flow-step"><div class="flow-dot">4</div><div class="flow-body"><h4>लोन दें</h4><p>राशि दर्ज करें — ब्याज, कुल राशि, EMI राशि और नियत तारीख़ें अपने आप गणना हो जाती हैं।</p></div></div>
<div class="flow-step"><div class="flow-dot">5</div><div class="flow-body"><h4>EMI दर्ज करें</h4><p>घर-घर जाकर वसूली करें और हर भुगतान दर्ज करें। बैलेंस और अगली नियत तारीख़ तुरंत अपडेट होती है; बैलेंस शून्य होने पर लोन अपने आप बंद हो जाता है।</p></div></div>
<div class="flow-step"><div class="flow-dot">6</div><div class="flow-body"><h4>ट्रैक करें, रिपोर्ट देखें और बैकअप लें</h4><p>डैशबोर्ड अलर्ट, दैनिक वसूली ट्रैकर, बल्क अपडेट, रिपोर्ट, कैशफ़्लो बुक, ग्राहक मैप — और रोज़ाना Google Drive ऑटो-बैकअप।</p></div></div>
</div>

<div class="callout tip"><span class="ico">💡</span><p><strong>Vasool Collection Tracker के साथ एक आम दिन:</strong> ऐप खोलें → डैशबोर्ड दिखाता है कि आज क्या देय है और क्या बकाया है → दैनिक वसूली ट्रैकर या कोई कलेक्शन खोलें → घर-घर जाकर वसूली करें और EMI दर्ज करें (ग्राहक मैप आपका मार्गदर्शन कर सकता है) → WhatsApp/SMS से रसीदें भेजें या प्रिंट करें → दिन का कैश कैशफ़्लो बुक में लिखें → आपका Google Drive ऑटो-बैकअप रोज़ाना चलता है।</p></div>`
    },
    {
      id: 'getting-started', num: 3, title: 'शुरुआत कैसे करें',
      html: `
<h3>पहली बार खोलना</h3>
<ol>
<li>ऐप खोलें। आपको 3-पेज वॉकथ्रू वाली <strong>स्वागत (Welcome)</strong> स्क्रीन दिखेगी (देखने के लिए स्वाइप करें)।</li>
<li>यहाँ विकल्प:
<ul>
<li><strong>ऐप डेमो देखें</strong> — YouTube पर एक वीडियो ट्यूटोरियल (तमिल में) खोलता है।</li>
<li><strong>चलिए शुरू करें</strong> — कंपनी सेटअप पर ले जाता है।</li>
<li><strong>पहले से बैकअप है? रीस्टोर करने के लिए यहाँ टैप करें</strong> — Vasool Collection Tracker बैकअप <code>.zip</code> चुनें और आपका सारा डेटा वापस आ जाता है।</li>
</ul></li>
<li>पहली बार खोलने पर ऐप <strong>नोटिफ़िकेशन</strong> और <strong>कैमरा</strong> की अनुमति भी माँगता है (EMI रिमाइंडर और ग्राहक फ़ोटो के लिए)।</li>
</ol>

<h3>कंपनी की जानकारी (संगठन सेटअप)</h3>
<ol>
<li>अपना <strong>कंपनी लोगो</strong> जोड़ें (वैकल्पिक) — गैलरी से चुनकर वर्गाकार क्रॉप किया जाता है। यह लोन PDF पर दिखाई देता है।</li>
<li><strong>कंपनी का नाम</strong> (अनिवार्य) और <strong>फ़ोन नंबर</strong> (अनिवार्य, ठीक 10 अंक) दर्ज करें।</li>
<li>चाहें तो ई-मेल, पता और <strong>नियम और शर्तें</strong> जोड़ें (लोन PDF पर छपती हैं)।</li>
<li>सूची में से अपनी <strong>मुद्रा</strong> चुनें।</li>
<li><strong>कंपनी विवरण सहेजें</strong> पर टैप करें। आप डैशबोर्ड पर पहुँच जाते हैं — सेटअप पूरा हो गया और दोबारा नहीं पूछा जाएगा।</li>
</ol>
<p>कंपनी की जानकारी आप कभी भी <strong>सेटिंग्स → कंपनी विवरण</strong> से बदल सकते हैं।</p>`
    },
    {
      id: 'dashboard', num: 4, title: 'डैशबोर्ड',
      html: `
<p>डैशबोर्ड आपका मुख्य केंद्र है। ऊपर से नीचे तक:</p>
<ul>
<li><strong>ऊपरी पट्टी</strong> — आपके संगठन का नाम, साथ में तीन बटन: <strong>सपोर्ट से संपर्क करें</strong>, <strong>प्लान/अपग्रेड</strong> और <strong>सेटिंग्स</strong>।</li>
<li><strong>वसूली अलर्ट विजेट</strong> — तब दिखता है जब लोन बकाया हों या आज देय हों ("N लोन बकाया")। इसे टैप करने पर <strong>दैनिक वसूली ट्रैकर</strong> खुलता है।</li>
<li><strong>कुल बैलेंस कार्ड</strong> — सभी सक्रिय लोनों का कुल बकाया बैलेंस, कलेक्शन प्रकार के अनुसार अनुपातिक बार के साथ बँटा हुआ। यहाँ का <strong>एक्सपोर्ट</strong> बटन आपका डेटा एक्सपोर्ट करता है <span class="badge diamond">Diamond</span>।</li>
<li><strong>सभी कलेक्शन (N)</strong> — आपकी कलेक्शन सूची, एक <strong>सॉर्ट मेनू</strong> (नाम A–Z / Z–A, निर्माण पुराना/नया — याद रहता है) और एक <strong>बल्क अपडेट</strong> शॉर्टकट <span class="badge diamond">Diamond</span> के साथ।</li>
<li><strong>खोज</strong> — 5 या अधिक कलेक्शन होने पर अपने आप दिखती है; कलेक्शन के नाम या क्षेत्र से खोजती है।</li>
<li><strong>कलेक्शन कार्ड</strong> — नाम, क्षेत्र, सक्रिय लोनों की संख्या और बकाया बैलेंस। कोने का बैज (साप्ताहिक प्रकारों के लिए) वसूली का दिन या प्रकार दिखाता है। कलेक्शन खोलने के लिए टैप करें।</li>
<li><strong>नया कलेक्शन</strong> बटन — कलेक्शन बनाता है (Base प्लान में अधिकतम 5; Premium/Diamond में असीमित)।</li>
</ul>
<div class="callout"><span class="ico">🔒</span><p><strong>प्राइवेसी मोड:</strong> चालू होने पर (सुरक्षा अनुभाग देखें), डैशबोर्ड और ट्रैकरों की सभी राशियाँ <code>* * * * *</code> के रूप में दिखती हैं।</p></div>`
    },
    {
      id: 'collections', num: 5, title: 'कलेक्शन',
      html: `
<p>कलेक्शन यह तय करता है कि ग्राहकों का एक समूह <em>कैसे</em> चुकाएगा।</p>

<h3>कलेक्शन के प्रकार</h3>
<div class="table-wrap"><table>
<thead><tr><th>प्रकार</th><th>EMI चक्र</th><th>ब्याज की गणना</th><th>समाप्ति तारीख़</th></tr></thead>
<tbody>
<tr><td><strong>दैनिक</strong></td><td>हर दिन</td><td><code>loan amount × rate ÷ 100</code> (फ्लैट, शुरुआत में)</td><td>शुरुआत + किस्तें (दिन)</td></tr>
<tr><td><strong>साप्ताहिक</strong></td><td>हर सप्ताह (वसूली का दिन चुनें)</td><td>दैनिक जैसा ही</td><td>शुरुआत + किस्तें (सप्ताह)</td></tr>
<tr><td><strong>पाक्षिक (Bi-Weekly)</strong></td><td>हर 2 सप्ताह (दिन चुनें)</td><td>दैनिक जैसा ही</td><td>शुरुआत + किस्तें × 2 (सप्ताह)</td></tr>
<tr><td><strong>कस्टम साप्ताहिक</strong></td><td>हर सप्ताह (दिन चुनें)</td><td><code>rate × installments</code> (दर = प्रति 100 पर प्रति किस्त राशि)</td><td>शुरुआत + किस्तें (सप्ताह)</td></tr>
<tr><td><strong>मासिक</strong></td><td>हर महीने</td><td><code>rate × installments</code></td><td>शुरुआत + किस्तें (महीने)</td></tr>
<tr><td><strong>मासिक (ब्याज)</strong></td><td>हर महीने</td><td>केवल-ब्याज EMI: हर EMI = ब्याज राशि; मूलधन बैलेंस के रूप में तब तक रहता है जब तक चुकता न हो</td><td>शुरुआत + किस्तें (महीने)</td></tr>
</tbody></table></div>
<div class="callout"><span class="ico">⭐</span><p><strong>मासिक (ब्याज)</strong> कलेक्शनों के लिए Premium प्लान ज़रूरी है, और ये बल्क अपडेट में उपलब्ध नहीं हैं।</p></div>

<h3>कलेक्शन बनाएँ</h3>
<ol>
<li>डैशबोर्ड → <strong>नया कलेक्शन</strong>।</li>
<li><strong>कलेक्शन का नाम</strong> और <strong>क्षेत्र का नाम</strong> दर्ज करें।</li>
<li><strong>कलेक्शन प्रकार</strong> चुनें; साप्ताहिक प्रकारों के लिए <strong>वसूली का दिन</strong> (सोमवार–रविवार) भी चुनें।</li>
<li><strong>ब्याज दर (प्रति 100 पर राशि)</strong> तय करें, वैकल्पिक <strong>प्रोसेसिंग शुल्क</strong>, यह कि <strong>ब्याज शुरुआत में लेना है या नहीं</strong> (दी जाने वाली राशि से ब्याज काट लिया जाता है), और डिफ़ॉल्ट <strong>किस्तों की संख्या</strong>।</li>
<li>ज़रूरत हो तो <strong>नोट्स</strong> जोड़ें और <strong>सहेजें</strong>। इस कलेक्शन के नए लोनों में ये मान पहले से भर जाते हैं (हर लोन में आप इन्हें बदल भी सकते हैं)।</li>
</ol>

<h3>कलेक्शन के अंदर</h3>
<ul>
<li><strong>हेडर कार्ड</strong> — आज का सारांश, कुल बैलेंस, राशियाँ छिपाने/दिखाने के लिए एक <strong>आँख (eye) बटन</strong> (पासकोड लॉक चालू होने पर पासकोड से सुरक्षित), और <strong>कैशफ़्लो देखें</strong> <span class="badge premium">Premium</span>।</li>
<li><strong>ऊपरी पट्टी</strong> — <strong>ग्राहक मैप</strong> बटन <span class="badge diamond">Diamond</span>, <strong>रिपोर्ट</strong> बटन <span class="badge premium">Premium</span>, और एक <strong>⋮ मेनू</strong>: कलेक्शन संपादित करें, कलेक्शन हटाएँ, <strong>ग्राहकों का क्रम बदलें</strong> <span class="badge diamond">Diamond</span> (ग्राहकों को अपने घर-घर रूट के क्रम में खींचकर लगाएँ), रिपोर्ट।</li>
<li><strong>टैब</strong> — सक्रिय / निष्क्रिय / सभी ग्राहक।</li>
<li><strong>फ़िल्टर चिप्स</strong> (सक्रिय टैब) — <strong>सभी · n</strong>, <strong>आज देय · n</strong>, <strong>बकाया · n</strong> लाइव गिनती के साथ। सूची फ़िल्टर करने के लिए टैप करें।</li>
<li><strong>सॉर्ट</strong> — सॉर्ट बटन में कस्टम क्रम (आपका बदला हुआ क्रम), नाम A–Z, नाम Z–A विकल्प हैं। चुनाव हर कलेक्शन के लिए अलग याद रहता है।</li>
<li><strong>खोज</strong> — मैग्निफ़ायर एक खोज बॉक्स खोलता है (निष्क्रिय/सभी टैब पर हमेशा दिखता है)।</li>
<li><strong>ग्राहक कार्ड</strong> — फ़ोटो, नाम, क्षेत्र, फ़ोन (कॉल करने के लिए फ़ोन आइकन टैप करें), लोन राशि, EMI, नियत तारीख़ और बकाया बैलेंस। एक <strong>+</strong> बटन सीधे सूची से ही EMI दर्ज करता है <span class="badge premium">Premium</span>।</li>
<li><strong>नया ग्राहक</strong> बटन — Base प्लान में प्रति कलेक्शन 20 ग्राहक; Premium/Diamond में असीमित।</li>
</ul>`
    },
    {
      id: 'customers', num: 6, title: 'ग्राहक',
      html: `
<h3>ग्राहक जोड़ें</h3>
<ol>
<li>कोई कलेक्शन खोलें → <strong>नया ग्राहक</strong>।</li>
<li><strong>फ़ोटो</strong> जोड़ें (कैमरा या गैलरी, क्रॉप की हुई) — वैकल्पिक।</li>
<li><strong>ग्राहक का नाम</strong> (अनिवार्य), फ़ोन, ई-मेल, पता दर्ज करें।
<ul><li>अपनी फ़ोनबुक से नाम/फ़ोन भरने के लिए ऊपरी पट्टी में <strong>कॉन्टैक्ट्स-से-इम्पोर्ट</strong> बटन का उपयोग करें।</li></ul></li>
<li><strong>ग्राहक लोकेशन</strong> — <strong>मैप पिकर</strong> खोलने के लिए फ़ील्ड पर टैप करें:
<ul>
<li>लाल केंद्र पिन के नीचे मैप को खिसकाएँ, या</li>
<li>किसी शहर/क्षेत्र/पहचान-स्थल को <strong>खोजें</strong>, या</li>
<li>जहाँ आप खड़े हैं वहाँ पहुँचने के लिए <strong>मेरी-लोकेशन</strong> बटन टैप करें (लोकेशन अनुमति एक बार माँगी जाती है)।</li>
<li><strong>लोकेशन की पुष्टि करें</strong> पर टैप करें। निर्देशांक फ़ील्ड में दिखते हैं; ✕ उन्हें हटा देता है।</li>
</ul></li>
<li><strong>SMS नोटिफ़िकेशन</strong> टॉगल — चालू होने पर (और फ़ोन नंबर मौजूद हो), लोन और EMI के बाद ऐप WhatsApp/SMS रसीदें भेजने का विकल्प देता है।</li>
<li><strong>ग्राहक विवरण सहेजें</strong>।</li>
</ol>

<h3>ग्राहक विवरण स्क्रीन</h3>
<ul>
<li>प्रोफ़ाइल कार्ड: फ़ोटो, नाम, फ़ोन, पता, और <strong>ग्राहक लोकेशन तक नेविगेट करें</strong> <span class="badge diamond">Diamond</span> — लोकेशन सहेजी होने पर आपके मैप्स ऐप में मोड़-दर-मोड़ रास्ता खोलता है।</li>
<li>सक्रिय लोन का सारांश: प्रगति बार, कुल/चुकाया/बैलेंस टाइलें, EMI राशि और अगली नियत तारीख़, अदायगी इतिहास, और <strong>अदायगी अनुसूची</strong>।</li>
<li>ऊपरी पट्टी: लोन स्टेटमेंट PDF <strong>शेयर</strong> और <strong>डाउनलोड</strong> करें <span class="badge premium">Premium</span>, और एक <strong>⋮ मेनू</strong>: ग्राहक संपादित करें, <strong>लोन संपादित करें</strong>, ग्राहक हटाएँ, लोन हटाएँ।</li>
<li>नीचे का <strong>EMI जोड़ें</strong> बटन भुगतान दर्ज करता है।</li>
<li>जिन ग्राहकों का कोई सक्रिय लोन नहीं है, उनके लिए <strong>नया लोन</strong> दिखता है।</li>
</ul>`
    },
    {
      id: 'loans', num: 7, title: 'लोन',
      html: `
<h3>लोन बनाएँ</h3>
<ol>
<li>ग्राहक विवरण → <strong>नया लोन</strong>।</li>
<li>फ़ॉर्म कलेक्शन से पहले से भर जाता है (ब्याज दर, किस्तें, शुल्क)। <strong>लोन राशि</strong> दर्ज करें और शुरुआत की तारीख़ सहित जो ज़रूरी हो बदलें।</li>
<li>प्रीव्यू के लिए <strong>गणना करें</strong> पर टैप करें: दी गई राशि, कुल ब्याज, कुल चुकाने योग्य राशि, EMI राशि और समाप्ति तारीख़।</li>
<li><strong>सहेजें</strong>। यदि ग्राहक के पास फ़ोन नंबर है और SMS चालू है, तो <strong>रसीद भेजें</strong> शीट WhatsApp / SMS / प्रिंट के विकल्प देती है।</li>
</ol>
<p>संक्षेप में गणित: ब्याज कलेक्शन प्रकार के अनुसार निकाला जाता है (कलेक्शन अनुभाग की तालिका देखें); यदि "शुरुआत में ब्याज" चालू है, तो दिए जाने वाले नकद से ब्याज काट लिया जाता है; EMI = कुल ÷ किस्तें।</p>

<h3>लोन का प्रबंधन</h3>
<ul>
<li><strong>लोन संपादित करें</strong> (ग्राहक विवरण पर ⋮ मेनू) — राशि/दर/किस्तें बदलें; <strong>चुकाई गई राशि और वर्तमान नियत तारीख़ सुरक्षित रखते हुए</strong> दोबारा गणना होती है। पहले से चुकाई गई राशि से कम नया कुल ऐप स्वीकार नहीं करता।</li>
<li><strong>लोन बंद करें</strong> — इसे हाथ से चुकता चिह्नित करें (बैलेंस शून्य होने पर यह अपने आप भी बंद हो जाता है)।</li>
<li><strong>बंद लोन</strong> — हर ग्राहक के पिछले लोन बंद लोन देखें के अंतर्गत सूचीबद्ध रहते हैं, PDF शेयर/डाउनलोड के साथ <span class="badge premium">Premium</span>।</li>
<li><strong>अदायगी अनुसूची</strong> — पूरी किस्त तालिका; ऊपरी पट्टी से इसे PDF के रूप में शेयर करें।</li>
</ul>`
    },
    {
      id: 'collecting-emis', num: 8, title: 'EMI वसूली',
      html: `
<p>आप भुगतान चार तरीकों से दर्ज कर सकते हैं:</p>

<h3>क) ग्राहक स्क्रीन से</h3>
<p>ग्राहक विवरण → <strong>EMI जोड़ें</strong> → तारीख़ (डिफ़ॉल्ट आज), राशि (बैलेंस तक सीमित), और नकद/<strong>ऑनलाइन</strong> भुगतान मोड → सहेजें। बैलेंस, चुकाई गई राशि और अगली नियत तारीख़ अपने आप अपडेट होती है; बैलेंस शून्य होने पर लोन बंद हो जाता है। इसके बाद रसीद शीट आती है (यदि ग्राहक का SMS चालू है)।</p>

<h3>ख) कलेक्शन सूची से क्विक-पे <span class="badge premium">Premium</span></h3>
<p>कलेक्शन सूची में ग्राहक कार्ड पर <strong>+</strong> टैप करें — सूची छोड़े बिना वही EMI शीट।</p>

<h3>ग) दैनिक वसूली ट्रैकर</h3>
<p>डैशबोर्ड अलर्ट विजेट या <strong>सेटिंग्स → दैनिक वसूली ट्रैकर</strong>।</p>
<ul>
<li>आज की <strong>वसूली बनाम लक्ष्य</strong> प्रगति।</li>
<li><strong>बकाया EMI</strong> (लाल) और <strong>आज देय EMI</strong> सूचियाँ — हर पंक्ति में ग्राहक, कलेक्शन, EMI राशि और नियत तारीख़ के साथ एक <strong>वसूलें</strong> बटन होता है जो EMI शीट खोलता है।</li>
</ul>

<h3>घ) बल्क अपडेट <span class="badge diamond">Diamond</span></h3>
<p>डैशबोर्ड → <strong>बल्क अपडेट</strong> चिप:</p>
<ol>
<li><strong>तारीख़</strong> (ऊपरी पट्टी) और <strong>कलेक्शन</strong> चुनें (मासिक-ब्याज कलेक्शन शामिल नहीं हैं)।</li>
<li>हर सक्रिय लोन पहले से भरी EMI राशि के साथ सूचीबद्ध होता है (⋮ मेनू में <strong>EMI राशि पहले से भरें</strong> टॉगल करें)। राशियाँ बदलें, हर पंक्ति के लिए नकद/ऑनलाइन चुनें, और ग्राहकों को एक-एक करके या <strong>सभी चुनें</strong> से चुनें।</li>
<li>निचली पट्टी आपके चयन का कुल दिखाती है — <strong>एंट्रियाँ अपडेट करें</strong> टैप करें → पुष्टि करें। सभी किस्तें एक साथ सहेज दी जाती हैं।</li>
</ol>`
    },
    {
      id: 'customer-map', num: 9, title: 'ग्राहक मैप',
      html: `
<p><span class="badge diamond">Diamond</span> कोई कलेक्शन खोलें → ऊपरी पट्टी में <strong>लोकेशन आइकन</strong>।</p>
<ul>
<li>जिस भी ग्राहक की लोकेशन सहेजी गई है, वह OpenStreetMap व्यू पर <strong>अपने नाम के साथ लाल पिन</strong> के रूप में दिखता है।</li>
<li>मैप सभी पिनों को अपने आप फ़्रेम करता है; <strong>⛶ बटन</strong> कभी भी दोबारा फ़्रेम कर देता है। नीचे की चिप मैप पर ग्राहकों की गिनती दिखाती है।</li>
<li><strong>किसी पिन पर टैप करें</strong> → ग्राहक का नाम, <strong>वर्तमान बैलेंस</strong> और <strong>मैप्स में खोलें</strong> (आपके मैप्स ऐप में वह जगह दिखाता है) वाला कार्ड। हटाने के लिए कहीं और टैप करें।</li>
<li>इसका उपयोग रूट की योजना बनाने और अपनी वसूली लाइन को भौगोलिक रूप से देखने के लिए करें। (मैप टाइलों के लिए इंटरनेट चाहिए; देखे गए क्षेत्र कैश हो जाते हैं।)</li>
</ul>`
    },
    {
      id: 'cashflow-book', num: 10, title: 'कैशफ़्लो बुक',
      html: `
<p><span class="badge premium">Premium</span> हर कलेक्शन के लिए दैनिक नकदी की आवाजाही ट्रैक करें: कलेक्शन विवरण → <strong>कैशफ़्लो देखें</strong> → <strong>बुक एंट्री जोड़ें</strong>।</p>
<ol>
<li>तारीख़ चयन कार्ड से <strong>तारीख़</strong> चुनें।</li>
<li><strong>आवक (Incoming)</strong> (आरंभिक बैलेंस, नकद प्राप्ति, वसूली राशि, अर्जित ब्याज, अन्य) और <strong>जावक (Outgoing)</strong> (लोन वितरण, पेट्रोल, भोजन, वाहन, अन्य) राशियाँ दर्ज करें। सारांश कार्ड आरंभिक / आवक / जावक / अंतिम बैलेंस लाइव दिखाता है।</li>
<li><strong>कुल आय / कुल खर्च</strong> और <strong>अंतिम बैलेंस</strong> की समीक्षा करें।</li>
<li>चाहें तो <strong>नोट</strong> जोड़ें और सहेजें।</li>
</ol>
<p>एंट्रियाँ तारीख़ के अनुसार आय, खर्च, आरंभिक/अंतिम बैलेंस और आपके नोट के साथ सूचीबद्ध होती हैं। संपादित करने के लिए दाएँ स्वाइप करें, हटाने के लिए बाएँ।</p>`
    },
    {
      id: 'reports-export', num: 11, title: 'रिपोर्ट और एक्सपोर्ट',
      html: `
<h3>कलेक्शन रिपोर्ट <span class="badge premium">Premium</span></h3>
<p>कलेक्शन विवरण → रिपोर्ट से खुलती है (PDF डाउनलोड के लिए Premium ज़रूरी है)।</p>
<ul>
<li>ऊपरी पट्टी में <strong>मासिक / साप्ताहिक टॉगल</strong>; तीर महीनों/सप्ताहों के बीच ले जाते हैं।</li>
<li><strong>कैलेंडर</strong> उन दिनों को चिह्नित करता है जिनमें नए लोन या वसूली हुई थी। <strong>किसी दिन पर टैप करें</strong> — दिन सारांश शीट खुलती है: कुल राशियाँ और उस दिन के लोनों और किस्तों की सूचियाँ, प्रति-दिन PDF डाउनलोड के साथ।</li>
<li>कैलेंडर के नीचे: उस अवधि का <strong>सारांश</strong> (नए निवेश, ब्याज, कुल लोन, कुल वसूली, गिनतियाँ) और पूरी <strong>नए लोन</strong> और <strong>किस्तें</strong> सूचियाँ।</li>
<li><strong>डाउनलोड बटन</strong> महीने/सप्ताह की रिपोर्ट को PDF के रूप में एक्सपोर्ट करता है <span class="badge premium">Premium</span>।</li>
</ul>

<h3>एडवांस रिपोर्ट <span class="badge diamond">Diamond</span></h3>
<p><strong>सेटिंग्स → एडवांस रिपोर्ट</strong>: और गहरा व्यावसायिक विश्लेषण।</p>

<h3>Excel/CSV में एक्सपोर्ट <span class="badge diamond">Diamond</span></h3>
<p>डैशबोर्ड → कुल बैलेंस कार्ड पर <strong>एक्सपोर्ट</strong>। <strong>सभी कलेक्शन</strong> एक साथ या कोई एक कलेक्शन एक्सपोर्ट करें। स्प्रेडशीट-संगत <strong>CSV</strong> फ़ाइल बनती है (ग्राहक, पता, फ़ोन, दिया गया लोन, ब्याज, कुल, EMI, बैलेंस), जो <code>Documents/Vasool Collection Tracker/Export</code> में सहेजी जाती है और अपने आप खुल जाती है।</p>`
    },
    {
      id: 'receipts-printing', num: 12, title: 'रसीदें और थर्मल प्रिंटिंग',
      html: `
<h3>WhatsApp / SMS रसीदें</h3>
<p>लोन बनाने या EMI दर्ज करने के बाद (जिन ग्राहकों का फ़ोन नंबर है और SMS चालू है), <strong>रसीद भेजें</strong> शीट ये विकल्प देती है:</p>
<ul>
<li><strong>WhatsApp</strong> — ग्राहक के नंबर पर पहले से लिखा रसीद संदेश खोलता है।</li>
<li><strong>SMS</strong> — वही संदेश आपके SMS ऐप से।</li>
<li>रसीद का टेक्स्ट आपकी <strong>SMS भाषा</strong> सेटिंग का पालन करता है (जैसे तमिल)।</li>
</ul>

<h3>थर्मल प्रिंटर (Bluetooth ESC/POS)</h3>
<ol>
<li><strong>सेटिंग्स → थर्मल प्रिंटर</strong> → <strong>थर्मल प्रिंटर सक्षम करें</strong> चालू करें।</li>
<li>Bluetooth अनुमति दें, Android Bluetooth सेटिंग्स में अपना प्रिंटर पेयर करें, फिर पेयर्ड डिवाइस सूची में उसके सामने <strong>कनेक्ट</strong> पर टैप करें। जाँच के लिए <strong>टेस्ट प्रिंट</strong> का उपयोग करें।</li>
<li>सक्षम <em>और कनेक्टेड</em> होने पर, लोन और EMI के बाद रसीद भेजें शीट में एक <strong>रसीद प्रिंट करें</strong> विकल्प दिखता है।</li>
</ol>`
    },
    {
      id: 'backup-restore', num: 13, title: 'बैकअप और रीस्टोर',
      html: `
<p>आपका डेटा फ़ोन पर ही रहता है — बैकअप को गंभीरता से लें।</p>

<h3>मैन्युअल बैकअप <span class="badge premium">Premium</span></h3>
<p><strong>सेटिंग्स → बैकअप और रीस्टोर</strong>:</p>
<ul>
<li><strong>बैकअप डाउनलोड करें</strong> — पूरा बैकअप <code>.zip</code> फ़ोन में कहीं भी सहेजें।</li>
<li><strong>बैकअप डेटा रीस्टोर करें</strong> — सब कुछ वापस लाने के लिए कोई बैकअप <code>.zip</code> चुनें।</li>
<li><strong>बैकअप बनाकर शेयर करें</strong> — बैकअप बनाएँ और शेयर करें (WhatsApp, ईमेल, Drive…)।</li>
<li><strong>Google Drive पर बैकअप</strong> — नीचे देखें।</li>
</ul>

<h3>Google Drive बैकअप</h3>
<ul>
<li>अपने Google खाते से <strong>Google Drive कनेक्ट करें</strong>, फिर कभी भी <strong>अभी बैकअप लें</strong>।</li>
<li><strong>ऑटो बैकअप सक्षम करें</strong> <span class="badge diamond">Diamond</span> — आपके Drive पर <strong>दिन में एक बार अपने आप</strong> बैकअप लेता है (इंटरनेट चाहिए; सक्षम करते ही पहला बैकअप तुरंत चलता है)।</li>
</ul>

<h3>नए फ़ोन पर रीस्टोर करना</h3>
<p>Vasool Collection Tracker इंस्टॉल करें → स्वागत स्क्रीन पर <strong>"पहले से बैकअप है? रीस्टोर करने के लिए यहाँ टैप करें"</strong> पर टैप करें → अपना <code>.zip</code> चुनें। सब कुछ (कलेक्शन, ग्राहक, लोन, इतिहास) वापस आ जाता है।</p>`
    },
    {
      id: 'security', num: 14, title: 'सुरक्षा',
      html: `
<p>सब कुछ <strong>सेटिंग्स</strong> और <strong>सेटिंग्स → उपयोगकर्ता वरीयताएँ</strong> में:</p>
<ul>
<li><strong>बायोमेट्रिक लॉक</strong> (सेटिंग्स → सुरक्षा) — ऐप खुलने पर हर बार फ़िंगरप्रिंट/फ़ेस (या डिवाइस PIN) माँगे।</li>
<li><strong>पासकोड लॉक</strong> (उपयोगकर्ता वरीयताएँ → सुरक्षा) — 4 अंकों का निजी पासकोड सेट करें। सक्षम होने के बाद पासकोड ज़रूरी होता है:
<ul>
<li>बायोमेट्रिक लॉक चालू/बंद करने के लिए,</li>
<li><strong>प्राइवेसी मोड</strong> टॉगल करने के लिए (कलेक्शन के अंदर के आँख बटन सहित),</li>
<li>पासकोड को बंद करने या <strong>बदलने</strong> के लिए (सक्षम होते ही पासकोड बदलें पंक्ति दिखती है)।</li>
</ul></li>
<li><strong>प्राइवेसी मोड</strong> — ऐप की हर राशि को <code>* * * * *</code> के रूप में छिपा देता है। जब कोई आपके कंधे के ऊपर से देख रहा हो तब बेहतरीन; असली आँकड़े देखने के लिए इसे (पासकोड के साथ, यदि सेट हो) पलट दें।</li>
</ul>
<div class="callout tip"><span class="ico">🆘</span><p>पासकोड भूल गए? <strong>सेटिंग्स → सपोर्ट से संपर्क करें</strong> से सपोर्ट से संपर्क करें — वे आपको दोबारा एक्सेस दिलाने में मदद कर सकते हैं।</p></div>`
    },
    {
      id: 'settings-preferences', num: 15, title: 'सेटिंग्स और वरीयताएँ',
      html: `
<p><strong>सेटिंग्स</strong> (डैशबोर्ड पर गियर आइकन):</p>
<div class="table-wrap"><table>
<thead><tr><th>आइटम</th><th>यह क्या करता है</th></tr></thead>
<tbody>
<tr><td>कंपनी विवरण</td><td>संगठन की जानकारी, लोगो, मुद्रा, नियम व शर्तें संपादित करें</td></tr>
<tr><td>सब्सक्रिप्शन अपग्रेड करें</td><td>प्लान और भुगतान (सब्सक्रिप्शन प्लान अनुभाग देखें)</td></tr>
<tr><td>एनालिटिक्स</td><td>व्यावसायिक विश्लेषण का सारांश</td></tr>
<tr><td>एडवांस रिपोर्ट <span class="badge diamond">Diamond</span></td><td>गहन रिपोर्ट</td></tr>
<tr><td>दैनिक वसूली ट्रैकर</td><td>आज की देय/बकाया वसूली सूची</td></tr>
<tr><td>उपयोगकर्ता वरीयताएँ</td><td>नीचे देखें</td></tr>
<tr><td>थर्मल प्रिंटर</td><td>प्रिंटर सेटअप (रसीदें और थर्मल प्रिंटिंग देखें)</td></tr>
<tr><td>बायोमेट्रिक लॉक</td><td>ऐप लॉक टॉगल</td></tr>
<tr><td>बैकअप और रीस्टोर <span class="badge premium">Premium</span></td><td>लोकल और Drive बैकअप</td></tr>
<tr><td>सपोर्ट से संपर्क / रेट करें / समीक्षा करें / फ़ीचर सुझाएँ / रेफ़र करें और कमाएँ</td><td>सहायता और प्रतिक्रिया</td></tr>
<tr><td>सेवा की शर्तें / गोपनीयता नीति</td><td>कानूनी दस्तावेज़</td></tr>
</tbody></table></div>

<p><strong>उपयोगकर्ता वरीयताएँ:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>आइटम</th><th>यह क्या करता है</th></tr></thead>
<tbody>
<tr><td>ऐप भाषा</td><td>English, தமிழ், हिंदी, తెలుగు, ಕನ್ನಡ, മലയാളം — तुरंत लागू होती है</td></tr>
<tr><td>थीम</td><td>सिस्टम / लाइट / डार्क</td></tr>
<tr><td>मुद्रा</td><td>पूरे ऐप में उपयोग होने वाला मुद्रा चिह्न</td></tr>
<tr><td>प्राइवेसी मोड</td><td>सभी राशियाँ छिपाएँ</td></tr>
<tr><td>EMI रिमाइंडर नोटिफ़िकेशन</td><td>रोज़ाना 9:00 AM पर रिमाइंडर (नोटिफ़िकेशन देखें)</td></tr>
<tr><td>EMI तारीख़ समय के साथ दिखाएँ</td><td>अदायगी इतिहास दर्ज करने का सटीक समय दिखाता है</td></tr>
<tr><td>पासकोड लॉक / पासकोड बदलें</td><td>4 अंकों की सुरक्षा (सुरक्षा देखें)</td></tr>
</tbody></table></div>`
    },
    {
      id: 'notifications', num: 16, title: 'नोटिफ़िकेशन',
      html: `
<p>उपयोगकर्ता वरीयताओं में <strong>EMI रिमाइंडर नोटिफ़िकेशन</strong> सक्षम करें। हर दिन <strong>9:00 AM</strong> पर ऐप आपके लोन जाँचता है और तभी सूचित करता है जब वसूलने के लिए कुछ हो:</p>
<ul>
<li><em>"आज N EMI देय • M बकाया लोन लंबित"</em></li>
<li><em>"बकाया EMI अलर्ट — N लोन के भुगतान बकाया हैं। समीक्षा के लिए टैप करें।"</em></li>
</ul>
<p>नोटिफ़िकेशन पर टैप करने से ऐप खुलता है। सुनिश्चित करें कि नोटिफ़िकेशन की अनुमति दी गई है (पहली बार खोलने पर पूछी जाती है; अन्यथा Android सेटिंग्स में सक्षम करें)।</p>
<p>ऐप अपडेट के बाद, एक <strong>नया क्या है</strong> डायलॉग हर संस्करण में एक बार नए फ़ीचर दिखाता है।</p>`
    },
    {
      id: 'subscription-plans', num: 17, title: 'सब्सक्रिप्शन प्लान और मूल्य',
      html: `
<div class="plan-mini-grid">
<div class="plan-mini"><h4>Base</h4><div class="pm-price">₹149<span>/माह</span></div><div class="pm-year">₹1,499/वर्ष</div></div>
<div class="plan-mini highlight"><h4>Premium</h4><div class="pm-price">₹249<span>/माह</span></div><div class="pm-year">₹2,499/वर्ष</div></div>
<div class="plan-mini"><h4>Diamond</h4><div class="pm-price">₹299<span>/माह</span></div><div class="pm-year">₹2,999/वर्ष</div></div>
</div>

<div class="table-wrap"><table>
<thead><tr><th>फ़ीचर</th><th class="center">Base</th><th class="center">Premium</th><th class="center">Diamond</th></tr></thead>
<tbody>
<tr><td>कलेक्शन</td><td class="center">अधिकतम 5</td><td class="center">असीमित</td><td class="center">असीमित</td></tr>
<tr><td>प्रति कलेक्शन ग्राहक</td><td class="center">अधिकतम 20</td><td class="center">असीमित</td><td class="center">असीमित</td></tr>
<tr><td>लोन, EMI दर्ज करना, दैनिक ट्रैकर</td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>लोन PDF डाउनलोड, बंद लोन</td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>मासिक (ब्याज) कलेक्शन प्रकार</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>ग्राहक सूची से क्विक-पे EMI</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>लोन PDF शेयर / PDF पर कंपनी लोगो</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>मासिक और साप्ताहिक रिपोर्ट + PDF</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>कैशफ़्लो बुक</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>मैन्युअल बैकअप और रीस्टोर</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>बल्क EMI अपडेट</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Excel/CSV में एक्सपोर्ट</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>ग्राहकों का क्रम बदलना (रूट क्रम)</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>रोज़ाना स्वचालित Google Drive बैकअप</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>ग्राहक मैप और लोकेशन तक नेविगेट¹</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>एडवांस रिपोर्ट</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>प्राथमिकता सपोर्ट</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
</tbody></table></div>
<p style="font-size:13.5px;color:var(--gray);">¹ ग्राहक की लोकेशन <em>सहेजना</em> (ग्राहक फ़ॉर्म का मैप पिकर) हर प्लान में उपलब्ध है; लोकेशन <em>देखना</em> — ग्राहक मैप और नेविगेट शॉर्टकट — के लिए Diamond ज़रूरी है।</p>

<h3>अपग्रेड कैसे करें</h3>
<p>डैशबोर्ड → प्लान आइकन, या सेटिंग्स → सब्सक्रिप्शन अपग्रेड करें:</p>
<ul>
<li><strong>Google Play</strong> — तुरंत, सुरक्षित इन-ऐप खरीद।</li>
<li><strong>ऑफ़लाइन प्लान</strong> — छूट वाले वार्षिक/मासिक/ट्रायल प्लान, जो ईमेल से भेजे गए कोड से सक्रिय होते हैं (कोड के लिए सपोर्ट को ईमेल करें, फिर उसे सक्रियण स्क्रीन पर दर्ज करें)।</li>
<li><strong>UPI</strong> — QR स्कैन करें / UPI ID कॉपी करें, भुगतान करें और स्क्रीनशॉट सपोर्ट के साथ शेयर करें; 24 घंटे के भीतर सक्रियण।</li>
<li><strong>रेफ़र करें और कमाएँ</strong> — अपना रेफ़रल लिंक शेयर करें; हर सफल रेफ़रल पर Rs.100 कमाएँ।</li>
</ul>`
    },
    {
      id: 'faq', num: 18, title: 'समस्या-समाधान और सामान्य प्रश्न',
      html: `
<details class="faq"><summary>मैप खाली है / पिन लोड नहीं होते।</summary><div class="faq-body"><p>मैप टाइलों को पहली बार इंटरनेट चाहिए। अपना कनेक्शन जाँचें; पहले देखे गए क्षेत्र ऑफ़लाइन भी काम करते हैं।</p></div></details>
<details class="faq"><summary>"वर्तमान लोकेशन का उपयोग करें" काम नहीं करता।</summary><div class="faq-body"><p>लोकेशन की अनुमति दें, GPS चालू करें और खुली जगह में कोशिश करें। घर के अंदर ऐप आपकी आख़िरी ज्ञात लोकेशन का उपयोग करता है।</p></div></details>
<details class="faq"><summary>ऑटो-बैकअप नहीं चल रहा।</summary><div class="faq-body"><p>इसके लिए Diamond प्लान, कनेक्टेड Google Drive खाता, चालू टॉगल और इंटरनेट ज़रूरी है। बैकअप दिन में एक बार चलता है।</p></div></details>
<details class="faq"><summary>लोन/EMI सहेजने के बाद प्रिंट विकल्प नहीं दिखता।</summary><div class="faq-body"><p>थर्मल प्रिंटिंग सेटिंग्स → थर्मल प्रिंटर में <strong>सक्षम</strong> होनी चाहिए <em>और</em> प्रिंटर उस समय कनेक्टेड होना चाहिए। साथ ही, रसीद शीट केवल उन्हीं ग्राहकों के लिए दिखती है जिनका फ़ोन नंबर है और SMS नोटिफ़िकेशन चालू है।</p></div></details>
<details class="faq"><summary>मैं प्राइवेसी मोड / बायोमेट्रिक लॉक बंद नहीं कर पा रहा।</summary><div class="faq-body"><p>पासकोड लॉक चालू है — अपना 4 अंकों का पासकोड दर्ज करें। भूल गए? सपोर्ट से संपर्क करें।</p></div></details>
<details class="faq"><summary>ग्राहक ने EMI से ज़्यादा दिया / पहले चुका दिया।</summary><div class="faq-body"><p>EMI जोड़ते समय बैलेंस तक की कोई भी राशि दर्ज करें — अनुसूची और नियत तारीख़ अपने आप समायोजित हो जाती है।</p></div></details>
<details class="faq"><summary>मैंने लोन संपादित किया — पुराने भुगतानों का क्या होगा?</summary><div class="faq-body"><p>कुछ नहीं। दर्ज की गई किस्तें सुरक्षित रहती हैं; ऐप बैलेंस को नया कुल − पहले से चुकाई गई राशि के रूप में दोबारा निकालता है, और चुकाई गई राशि से कम कुल स्वीकार नहीं करता।</p></div></details>
<details class="faq"><summary>नए फ़ोन पर कैसे जाऊँ?</summary><div class="faq-body"><p>पुराना फ़ोन: सेटिंग्स → बैकअप और रीस्टोर → बैकअप डाउनलोड करें (या बैकअप बनाकर शेयर करें)। नया फ़ोन: इंस्टॉल करें → स्वागत स्क्रीन → रीस्टोर → <code>.zip</code> चुनें।</p></div></details>
<details class="faq"><summary>कुछ और?</summary><div class="faq-body"><p>सेटिंग्स → <strong>सपोर्ट से संपर्क करें</strong> — ईमेल (24 घंटे में जवाब), WhatsApp ग्रुप और एक तमिल डेमो वीडियो।</p></div></details>
<p style="margin-top:18px;font-size:13.5px;color:var(--gray);"><em>यह गाइड Vasool Collection Tracker v1.0 का वर्णन करती है। कुछ फ़ीचरों के लिए चिह्नित अनुसार Premium या Diamond प्लान ज़रूरी है।</em></p>`
    }
  ]
};
