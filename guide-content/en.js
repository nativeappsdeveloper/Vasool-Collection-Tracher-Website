window.GUIDE_CONTENT = {
  lang: 'en',
  ui: {
    docTitle: 'Vasool Collection Tracker — User Guide',
    pageTitle: 'Vasool Collection Tracker User Guide',
    guideLabel: 'User Guide',
    tagline: 'Simple loan manager for tracking EMIs & repayments — every feature, how to use it, and the overall app flow.',
    version: 'Covers Vasool Collection Tracker v1.0',
    contents: 'Contents',
    backHome: '← Back to Home',
    pricingLink: 'Pricing',
    download: 'Download App',
    footerNote: '© 2026 Vasool Collection Tracker. Made with ❤️ for Indian finance professionals.'
  },
  sections: [
    {
      id: 'what-is-vasool-tracker', num: 1, title: 'What is Vasool Collection Tracker?',
      html: `
<p>Vasool Collection Tracker is a loan and collection management app for finance businesses and individual collection agents. It replaces the paper "vasool" notebook: you organise borrowers into <strong>collections</strong> (collection lines/routes), give <strong>loans</strong>, and record <strong>EMI payments</strong> as you collect them — with automatic balance tracking, due-date tracking, receipts, reports, and backups.</p>
<ul>
<li>Works fully offline; data is stored on your phone</li>
<li>Available in 6 app languages: English, தமிழ், हिंदी, తెలుగు, ಕನ್ನಡ, മലയാളം</li>
<li>Optional Google Drive backup keeps your data safe</li>
</ul>`
    },
    {
      id: 'core-concepts', num: 2, title: 'Core Concepts & App Flow',
      html: `
<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>Organization</strong></td><td>Your business — name, phone, logo, currency. Appears on receipts and PDFs.</td></tr>
<tr><td><strong>Collection</strong></td><td>A group/line of customers collected on the same cycle (e.g., "Market Street Daily"). Defines the type (daily/weekly/monthly…), interest rate, and default installment count.</td></tr>
<tr><td><strong>Customer</strong></td><td>A borrower inside a collection — name, phone, photo, address, GPS location.</td></tr>
<tr><td><strong>Loan</strong></td><td>Money given to a customer. The app calculates interest, total amount, EMI amount, and due dates from the collection settings.</td></tr>
<tr><td><strong>EMI / Installment</strong></td><td>One repayment. Recording it updates the repaid amount, balance, and next due date automatically. The loan closes itself when the balance reaches zero.</td></tr>
</tbody></table></div>

<h3>App flow</h3>
<div class="flow">
<div class="flow-step"><div class="flow-dot">1</div><div class="flow-body"><h4>First launch &amp; setup</h4><p>Welcome walkthrough → enter company details (or restore a backup zip and skip straight to your data).</p></div></div>
<div class="flow-step"><div class="flow-dot">2</div><div class="flow-body"><h4>Create a Collection</h4><p>Define the line: type (daily/weekly/monthly…), interest rate, and default installments.</p></div></div>
<div class="flow-step"><div class="flow-dot">3</div><div class="flow-body"><h4>Add Customers</h4><p>Name, phone, photo, address and GPS location for every borrower in the line.</p></div></div>
<div class="flow-step"><div class="flow-dot">4</div><div class="flow-body"><h4>Give Loans</h4><p>Enter the amount — interest, total, EMI amount and due dates are calculated automatically.</p></div></div>
<div class="flow-step"><div class="flow-dot">5</div><div class="flow-body"><h4>Record EMIs</h4><p>Collect door-to-door and record each payment. Balance and next due date update instantly; the loan closes automatically at zero balance.</p></div></div>
<div class="flow-step"><div class="flow-dot">6</div><div class="flow-body"><h4>Track, report &amp; back up</h4><p>Dashboard alerts, Daily Collection Tracker, Bulk Update, Reports, CashFlow Book, Customer Map — and a daily Google Drive auto-backup.</p></div></div>
</div>

<div class="callout tip"><span class="ico">💡</span><p><strong>A typical day with Vasool Collection Tracker:</strong> open the app → the Dashboard shows what's due and overdue → open the Daily Collection Tracker or a collection → collect and record EMIs door-to-door (the Customer Map can guide you) → share receipts by WhatsApp/SMS or print them → note the day's cash in the CashFlow Book → your Google Drive auto-backup runs daily.</p></div>`
    },
    {
      id: 'getting-started', num: 3, title: 'Getting Started',
      html: `
<h3>First launch</h3>
<ol>
<li>Open the app. You'll see the <strong>Welcome</strong> screen with a 3-page walkthrough (swipe to browse).</li>
<li>Options here:
<ul>
<li><strong>Watch App Demo</strong> — opens a video tutorial (in Tamil) on YouTube.</li>
<li><strong>Let's get Started</strong> — continues to company setup.</li>
<li><strong>Already have a backup? click here to Restore</strong> — pick a Vasool Collection Tracker backup <code>.zip</code> and all your data is restored.</li>
</ul></li>
<li>On first launch the app also asks for <strong>Notifications</strong> and <strong>Camera</strong> permission (used for EMI reminders and customer photos).</li>
</ol>

<h3>Company details (Organization setup)</h3>
<ol>
<li>Add your <strong>company logo</strong> (optional) — picked from the gallery and cropped square. It appears on loan PDFs.</li>
<li>Enter <strong>Company Name</strong> (required) and <strong>Phone Number</strong> (required, exactly 10 digits).</li>
<li>Optionally add E-mail, Address, and <strong>Terms and Conditions</strong> (printed on loan PDFs).</li>
<li>Choose your <strong>Currency</strong> from the list.</li>
<li>Tap <strong>Save Company Details</strong>. You land on the Dashboard — setup is complete and won't be asked again.</li>
</ol>
<p>You can edit company details anytime from <strong>Settings → Company Details</strong>.</p>`
    },
    {
      id: 'dashboard', num: 4, title: 'Dashboard',
      html: `
<p>The Dashboard is home base. From top to bottom:</p>
<ul>
<li><strong>Top bar</strong> — your organization name, plus three buttons: <strong>Contact Support</strong>, <strong>Plans/Upgrade</strong>, and <strong>Settings</strong>.</li>
<li><strong>Collection Alert widget</strong> — appears when loans are overdue or due today ("N loans overdue"). Tap it to open the <strong>Daily Collection Tracker</strong>.</li>
<li><strong>Gross Balance card</strong> — total outstanding balance of all active loans, split by collection type with a proportional bar. The <strong>Export</strong> button here exports your data <span class="badge diamond">Diamond</span>.</li>
<li><strong>All Collections (N)</strong> — your collections list with a <strong>sort menu</strong> (Name A–Z / Z–A, Creation oldest/newest — remembered) and a <strong>Bulk Update</strong> shortcut <span class="badge diamond">Diamond</span>.</li>
<li><strong>Search</strong> — appears automatically once you have 5 or more collections; searches by collection name or area.</li>
<li><strong>Collection cards</strong> — name, area, active loan count, and outstanding balance. The corner badge shows the collection day (for weekly types) or the type. Tap to open the collection.</li>
<li><strong>New Collection</strong> button — creates a collection (Base plan allows up to 5; Premium/Diamond unlimited).</li>
</ul>
<div class="callout"><span class="ico">🔒</span><p><strong>Privacy Mode:</strong> when enabled (see the Security section), all amounts on the Dashboard and trackers show as <code>* * * * *</code>.</p></div>`
    },
    {
      id: 'collections', num: 5, title: 'Collections',
      html: `
<p>A collection defines <em>how</em> a group of customers repays.</p>

<h3>Collection types</h3>
<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>EMI cycle</th><th>Interest calculation</th><th>End date</th></tr></thead>
<tbody>
<tr><td><strong>Daily</strong></td><td>Every day</td><td><code>loan amount × rate ÷ 100</code> (flat, up-front)</td><td>start + installments (days)</td></tr>
<tr><td><strong>Weekly</strong></td><td>Every week (pick a collection day)</td><td>same as Daily</td><td>start + installments (weeks)</td></tr>
<tr><td><strong>Bi-Weekly</strong></td><td>Every 2 weeks (pick a day)</td><td>same as Daily</td><td>start + installments × 2 (weeks)</td></tr>
<tr><td><strong>Custom Weekly</strong></td><td>Every week (pick a day)</td><td><code>rate × installments</code> (rate is the amount per 100 per installment)</td><td>start + installments (weeks)</td></tr>
<tr><td><strong>Monthly</strong></td><td>Every month</td><td><code>rate × installments</code></td><td>start + installments (months)</td></tr>
<tr><td><strong>Monthly (Interest)</strong></td><td>Every month</td><td>Interest-only EMIs: each EMI = the interest amount; the principal stays as the balance until settled</td><td>start + installments (months)</td></tr>
</tbody></table></div>
<div class="callout"><span class="ico">⭐</span><p><strong>Monthly (Interest)</strong> collections require the Premium plan, and are not available in Bulk Update.</p></div>

<h3>Create a collection</h3>
<ol>
<li>Dashboard → <strong>New Collection</strong>.</li>
<li>Enter <strong>Collection Name</strong> and <strong>Area Name</strong>.</li>
<li>Pick the <strong>Collection Type</strong>; for weekly types also pick the <strong>Collection Day</strong> (Monday–Sunday).</li>
<li>Set the <strong>Interest Rate (amount per 100)</strong>, optional <strong>Processing Fees</strong>, whether to <strong>Take Interest at Start</strong> (interest deducted from the amount handed over), and the default <strong>number of installments</strong>.</li>
<li>Add <strong>Notes</strong> if needed and <strong>Save</strong>. New loans in this collection pre-fill these values (you can still change them per loan).</li>
</ol>

<h3>Inside a collection</h3>
<ul>
<li><strong>Header card</strong> — today's summary, gross balance, an <strong>eye button</strong> to hide/show amounts (passcode-protected if Passcode Lock is on), and <strong>View CashFlow</strong> <span class="badge premium">Premium</span>.</li>
<li><strong>Top bar</strong> — <strong>Customer Map</strong> button <span class="badge diamond">Diamond</span>, <strong>Reports</strong> button <span class="badge premium">Premium</span>, and a <strong>⋮ menu</strong>: Edit Collection, Delete Collection, <strong>Reorder Customers</strong> <span class="badge diamond">Diamond</span> (drag customers into your door-to-door route order), Reports.</li>
<li><strong>Tabs</strong> — Active / Inactive / All customers.</li>
<li><strong>Filter chips</strong> (Active tab) — <strong>All · n</strong>, <strong>Due Today · n</strong>, <strong>Overdue · n</strong> with live counts. Tap to filter the list.</li>
<li><strong>Sort</strong> — the sort button offers Custom Order (your reorder), Name A–Z, Name Z–A. The choice is remembered per collection.</li>
<li><strong>Search</strong> — the magnifier expands a search box (always visible on Inactive/All tabs).</li>
<li><strong>Customer cards</strong> — photo, name, area, phone (tap the phone icon to call), loan amount, EMI, due date, and pending balance. A <strong>+</strong> button records an EMI directly from the list <span class="badge premium">Premium</span>.</li>
<li><strong>New Customer</strong> button — Base plan allows 20 customers per collection; Premium/Diamond unlimited.</li>
</ul>`
    },
    {
      id: 'customers', num: 6, title: 'Customers',
      html: `
<h3>Add a customer</h3>
<ol>
<li>Open a collection → <strong>New Customer</strong>.</li>
<li>Add a <strong>photo</strong> (camera or gallery, cropped) — optional.</li>
<li>Enter <strong>Customer Name</strong> (required), phone, e-mail, address.
<ul><li>Use the <strong>import-from-contacts</strong> button in the top bar to fill name/phone from your phonebook.</li></ul></li>
<li><strong>Customer Location</strong> — tap the field to open the <strong>map picker</strong>:
<ul>
<li>Pan the map under the red center pin, or</li>
<li><strong>Search</strong> a city/area/landmark, or</li>
<li>Tap the <strong>my-location</strong> button to jump to where you're standing (asks location permission once).</li>
<li>Tap <strong>Confirm Location</strong>. The coordinates appear in the field; ✕ clears them.</li>
</ul></li>
<li><strong>SMS notifications</strong> toggle — when on (and a phone number exists), the app offers WhatsApp/SMS receipts after loans and EMIs.</li>
<li><strong>Save Customer Details</strong>.</li>
</ol>

<h3>Customer details screen</h3>
<ul>
<li>Profile card: photo, name, phone, address, and <strong>Navigate to customer location</strong> <span class="badge diamond">Diamond</span> — opens turn-by-turn directions in your maps app when a location is saved.</li>
<li>Loan overview for the active loan: progress bar, Total/Paid/Balance tiles, EMI amount and next due date, repayment history, and the <strong>Repayment Schedule</strong>.</li>
<li>Top bar: <strong>share</strong> and <strong>download</strong> the loan statement PDF <span class="badge premium">Premium</span>, and a <strong>⋮ menu</strong>: Edit Customer, <strong>Edit Loan</strong>, Delete Customer, Delete Loan.</li>
<li><strong>Add EMI</strong> button at the bottom records a payment.</li>
<li>Customers with no active loan show <strong>New Loan</strong> instead.</li>
</ul>`
    },
    {
      id: 'loans', num: 7, title: 'Loans',
      html: `
<h3>Create a loan</h3>
<ol>
<li>Customer details → <strong>New Loan</strong>.</li>
<li>The form pre-fills from the collection (interest rate, installments, charges). Enter the <strong>Loan Amount</strong> and adjust anything needed, including the start date.</li>
<li>Tap <strong>Calculate</strong> to preview: amount given, total interest, total to repay, EMI amount, and the end date.</li>
<li><strong>Save</strong>. If the customer has a phone number and SMS enabled, a <strong>Send Receipt</strong> sheet offers WhatsApp / SMS / Print.</li>
</ol>
<p>The math in brief: interest is computed per the collection type (see the table in the Collections section); if "interest at start" is on, the interest is deducted from the cash handed over; EMI = total ÷ installments.</p>

<h3>Manage a loan</h3>
<ul>
<li><strong>Edit Loan</strong> (⋮ menu on customer details) — change amounts/rate/installments; recalculates while <strong>preserving the repaid amount and current due date</strong>. The app blocks a new total lower than what's already repaid.</li>
<li><strong>Close Loan</strong> — mark it settled manually (it also closes automatically at zero balance).</li>
<li><strong>Closed loans</strong> — every customer's past loans are listed under View Closed Loans, with PDF share/download <span class="badge premium">Premium</span>.</li>
<li><strong>Repayment Schedule</strong> — full installment table; share it as a PDF from the top bar.</li>
</ul>`
    },
    {
      id: 'collecting-emis', num: 8, title: 'Collecting EMIs',
      html: `
<p>You can record a payment four ways:</p>

<h3>a) From the customer screen</h3>
<p>Customer details → <strong>Add EMI</strong> → date (defaults to today), amount (capped at the balance), and Cash/<strong>Online</strong> payment mode → Save. Balance, repaid amount, and the next due date update automatically; the loan closes at zero balance. A receipt sheet follows (if the customer has SMS enabled).</p>

<h3>b) Quick-pay from the collection list <span class="badge premium">Premium</span></h3>
<p>Tap the <strong>+</strong> on a customer card in the collection list — same EMI sheet without leaving the list.</p>

<h3>c) Daily Collection Tracker</h3>
<p>Dashboard alert widget or <strong>Settings → Daily Collection Tracker</strong>.</p>
<ul>
<li><strong>Collected vs Target</strong> progress for today.</li>
<li><strong>Overdue EMIs</strong> (red) and <strong>Today's Due EMIs</strong> lists — each row shows the customer, collection, EMI amount, and due date with a <strong>Collect</strong> button that opens the EMI sheet.</li>
</ul>

<h3>d) Bulk Update <span class="badge diamond">Diamond</span></h3>
<p>Dashboard → <strong>Bulk Update</strong> chip:</p>
<ol>
<li>Pick the <strong>date</strong> (top bar) and the <strong>collection</strong> (Monthly-Interest collections are excluded).</li>
<li>Every active loan is listed with a pre-filled EMI amount (toggle <strong>Pre-fill EMI Amount</strong> in the ⋮ menu). Adjust amounts, choose Cash/Online per row, and select customers individually or with <strong>Select All</strong>.</li>
<li>The bottom bar totals your selection — tap <strong>Update Entries</strong> → confirm. All installments are saved in one shot.</li>
</ol>`
    },
    {
      id: 'customer-map', num: 9, title: 'Customer Map',
      html: `
<p><span class="badge diamond">Diamond</span> Open a collection → the <strong>location icon</strong> in the top bar.</p>
<ul>
<li>Every customer with a saved location appears as a <strong>red pin with their name</strong> on an OpenStreetMap view.</li>
<li>The map auto-frames all pins; the <strong>⛶ button</strong> re-frames anytime. The bottom chip counts customers on the map.</li>
<li><strong>Tap a pin</strong> → a card with the customer's name, <strong>current balance</strong>, and <strong>Open in Maps</strong> (shows the spot in your maps app). Tap elsewhere to dismiss.</li>
<li>Use it to plan routes and see your collection line geographically. (Requires internet for map tiles; viewed areas are cached.)</li>
</ul>`
    },
    {
      id: 'cashflow-book', num: 10, title: 'CashFlow Book',
      html: `
<p><span class="badge premium">Premium</span> Track daily cash movement per collection: collection details → <strong>View CashFlow</strong> → <strong>Add Book Entry</strong>.</p>
<ol>
<li>Pick the <strong>date</strong> with the date selector card.</li>
<li>Enter <strong>Incoming</strong> (opening balance, cash in, collection amount, interest earned, other) and <strong>Outgoing</strong> (loan deposits, petrol, food, vehicle, other) amounts. The summary card shows Opening / Incoming / Outgoing / Closing live.</li>
<li>Review <strong>Total Income / Total Expense</strong> and the <strong>Closing Balance</strong>.</li>
<li>Add an optional <strong>note</strong> and Save.</li>
</ol>
<p>Entries are listed by date with income, expense, opening/closing balances, and your note. Swipe right to edit, left to delete.</p>`
    },
    {
      id: 'reports-export', num: 11, title: 'Reports & Export',
      html: `
<h3>Collection reports <span class="badge premium">Premium</span></h3>
<p>Opens from collection details → Reports (PDF download requires Premium).</p>
<ul>
<li><strong>Monthly / Weekly toggle</strong> in the top bar; arrows step between months/weeks.</li>
<li>The <strong>calendar</strong> marks days that had new loans or collections. <strong>Tap a day</strong> for a Day Summary sheet: totals plus the day's loans and installments lists, with a per-day PDF download.</li>
<li>Below the calendar: the period's <strong>summary</strong> (new investments, interest, total loans, total collection, counts) and the full <strong>New Loans</strong> and <strong>Installments</strong> lists.</li>
<li>The <strong>download button</strong> exports the month/week report as a PDF <span class="badge premium">Premium</span>.</li>
</ul>

<h3>Advanced Reports <span class="badge diamond">Diamond</span></h3>
<p><strong>Settings → Advanced Reports</strong>: deeper business analytics.</p>

<h3>Export to Excel/CSV <span class="badge diamond">Diamond</span></h3>
<p>Dashboard → <strong>Export</strong> on the Gross Balance card. Export <strong>all collections</strong> at once or any single collection. Produces a spreadsheet-compatible <strong>CSV</strong> file (customer, address, phone, loan given, interest, total, EMI, balance) saved to <code>Documents/Vasool Collection Tracker/Export</code> and opened automatically.</p>`
    },
    {
      id: 'receipts-printing', num: 12, title: 'Receipts & Thermal Printing',
      html: `
<h3>WhatsApp / SMS receipts</h3>
<p>After creating a loan or recording an EMI (for customers with a phone number and SMS enabled), the <strong>Send Receipt</strong> sheet offers:</p>
<ul>
<li><strong>WhatsApp</strong> — opens a pre-written receipt message to the customer's number.</li>
<li><strong>SMS</strong> — same message via your SMS app.</li>
<li>The receipt text follows your <strong>SMS language</strong> setting (e.g., Tamil).</li>
</ul>

<h3>Thermal printer (Bluetooth ESC/POS)</h3>
<ol>
<li><strong>Settings → Thermal printer</strong> → turn <strong>Enable Thermal Printer</strong> on.</li>
<li>Grant Bluetooth permission, pair your printer in Android Bluetooth settings, then tap <strong>Connect</strong> next to it in the paired devices list. Use <strong>Test Print</strong> to verify.</li>
<li>Once enabled <em>and connected</em>, a <strong>Print Receipt</strong> option appears in the Send Receipt sheet after loans and EMIs.</li>
</ol>`
    },
    {
      id: 'backup-restore', num: 13, title: 'Backup & Restore',
      html: `
<p>Your data lives on the phone — take backups seriously.</p>

<h3>Manual backup <span class="badge premium">Premium</span></h3>
<p><strong>Settings → BackUp &amp; Restore</strong>:</p>
<ul>
<li><strong>Download Backup</strong> — save a full backup <code>.zip</code> anywhere on your phone.</li>
<li><strong>Restore BackUp Data</strong> — pick a backup <code>.zip</code> to restore everything.</li>
<li><strong>Backup &amp; Share</strong> — create a backup and share it (WhatsApp, email, Drive…).</li>
<li><strong>Backup to Google Drive</strong> — see below.</li>
</ul>

<h3>Google Drive backup</h3>
<ul>
<li><strong>Connect Google Drive</strong> with your Google account, then <strong>Backup now</strong> anytime.</li>
<li><strong>Enable Auto Backup</strong> <span class="badge diamond">Diamond</span> — backs up to your Drive <strong>automatically once a day</strong> (needs internet; first backup runs immediately when you enable it).</li>
</ul>

<h3>Restoring on a new phone</h3>
<p>Install Vasool Collection Tracker → on the Welcome screen tap <strong>"Already have a backup? click here to Restore"</strong> → pick your <code>.zip</code>. Everything (collections, customers, loans, history) comes back.</p>`
    },
    {
      id: 'security', num: 14, title: 'Security',
      html: `
<p>All under <strong>Settings</strong> and <strong>Settings → User Preferences</strong>:</p>
<ul>
<li><strong>Biometric Lock</strong> (Settings → Security) — require fingerprint/face (or device PIN) every time the app opens.</li>
<li><strong>Passcode Lock</strong> (User Preferences → Security) — set a private 4-digit passcode. Once enabled, the passcode is required to:
<ul>
<li>turn Biometric Lock on/off,</li>
<li>toggle <strong>Privacy Mode</strong> (including the eye button inside collections),</li>
<li>disable or <strong>change</strong> the passcode itself (Change Passcode row appears once enabled).</li>
</ul></li>
<li><strong>Privacy Mode</strong> — masks every amount in the app as <code>* * * * *</code>. Perfect when someone looks over your shoulder; flip it (with passcode, if set) to see real numbers.</li>
</ul>
<div class="callout tip"><span class="ico">🆘</span><p>Forgot your passcode? Contact support from <strong>Settings → Contact Support</strong> — they can help you regain access.</p></div>`
    },
    {
      id: 'settings-preferences', num: 15, title: 'Settings & Preferences',
      html: `
<p><strong>Settings</strong> (gear icon on the Dashboard):</p>
<div class="table-wrap"><table>
<thead><tr><th>Item</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>Company Details</td><td>Edit organization info, logo, currency, T&amp;C</td></tr>
<tr><td>Upgrade Subscriptions</td><td>Plans &amp; payment (see the Subscription Plans section)</td></tr>
<tr><td>Analytics</td><td>Business analytics overview</td></tr>
<tr><td>Advanced Reports <span class="badge diamond">Diamond</span></td><td>In-depth reports</td></tr>
<tr><td>Daily Collection Tracker</td><td>Today's due/overdue collection list</td></tr>
<tr><td>User Preferences</td><td>See below</td></tr>
<tr><td>Thermal printer</td><td>Printer setup (see Receipts &amp; Thermal Printing)</td></tr>
<tr><td>Biometric Lock</td><td>App lock toggle</td></tr>
<tr><td>BackUp &amp; Restore <span class="badge premium">Premium</span></td><td>Local &amp; Drive backups</td></tr>
<tr><td>Contact Support / Rate / Review / Suggest a Feature / Refer &amp; Earn</td><td>Support and feedback</td></tr>
<tr><td>Terms of Service / Privacy Policy</td><td>Legal documents</td></tr>
</tbody></table></div>

<p><strong>User Preferences:</strong></p>
<div class="table-wrap"><table>
<thead><tr><th>Item</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>App Language</td><td>English, Tamil, Hindi, Telugu, Kannada, Malayalam — applies instantly</td></tr>
<tr><td>Theme</td><td>System / Light / Dark</td></tr>
<tr><td>Currency</td><td>Currency symbol used across the app</td></tr>
<tr><td>Privacy Mode</td><td>Mask all amounts</td></tr>
<tr><td>EMI Reminder Notifications</td><td>Daily reminder at 9:00 AM (see Notifications)</td></tr>
<tr><td>Show EMI date with time</td><td>Repayment history shows the exact recorded time</td></tr>
<tr><td>Passcode Lock / Change Passcode</td><td>4-digit protection (see Security)</td></tr>
</tbody></table></div>`
    },
    {
      id: 'notifications', num: 16, title: 'Notifications',
      html: `
<p>Enable <strong>EMI Reminder Notifications</strong> in User Preferences. Every day at <strong>9:00 AM</strong> the app checks your loans and notifies you only when there's something to collect:</p>
<ul>
<li><em>"N EMI(s) due today • M overdue loan(s) pending"</em></li>
<li><em>"Overdue EMI Alert — N loan(s) have overdue payments. Tap to review."</em></li>
</ul>
<p>Tapping the notification opens the app. Make sure notification permission is granted (asked at first launch; otherwise enable it in Android settings).</p>
<p>After app updates, a <strong>What's New</strong> dialog lists the latest features once per version.</p>`
    },
    {
      id: 'subscription-plans', num: 17, title: 'Subscription Plans & Pricing',
      html: `
<div class="plan-mini-grid">
<div class="plan-mini"><h4>Base</h4><div class="pm-price">₹149<span>/month</span></div><div class="pm-year">₹1,499/year</div></div>
<div class="plan-mini highlight"><h4>Premium</h4><div class="pm-price">₹249<span>/month</span></div><div class="pm-year">₹2,499/year</div></div>
<div class="plan-mini"><h4>Diamond</h4><div class="pm-price">₹299<span>/month</span></div><div class="pm-year">₹2,999/year</div></div>
</div>

<div class="table-wrap"><table>
<thead><tr><th>Feature</th><th class="center">Base</th><th class="center">Premium</th><th class="center">Diamond</th></tr></thead>
<tbody>
<tr><td>Collections</td><td class="center">up to 5</td><td class="center">Unlimited</td><td class="center">Unlimited</td></tr>
<tr><td>Customers per collection</td><td class="center">up to 20</td><td class="center">Unlimited</td><td class="center">Unlimited</td></tr>
<tr><td>Loans, EMI recording, daily tracker</td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Loan PDF download, closed loans</td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Monthly (Interest) collection type</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Quick-pay EMI from customer list</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Share loan PDF / company logo on PDF</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Monthly &amp; weekly reports + PDFs</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>CashFlow Book</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Manual Backup &amp; Restore</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Bulk EMI Update</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Export to Excel/CSV</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Reorder customers (route order)</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Daily automatic Google Drive backup</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Customer Map &amp; navigate to location¹</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Advanced Reports</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
<tr><td>Priority support</td><td class="center"><span class="dash">—</span></td><td class="center"><span class="dash">—</span></td><td class="center"><span class="tick">✓</span></td></tr>
</tbody></table></div>
<p style="font-size:13.5px;color:var(--gray);">¹ <em>Saving</em> a customer's location (the map picker on the customer form) is available on every plan; <em>viewing</em> locations — the Customer Map and the navigate shortcut — requires Diamond.</p>

<h3>How to upgrade</h3>
<p>Dashboard → plans icon, or Settings → Upgrade Subscriptions:</p>
<ul>
<li><strong>Google Play</strong> — instant, secure in-app purchase.</li>
<li><strong>Offline plans</strong> — discounted yearly/monthly/trial plans activated by an emailed code (email support for the code, enter it on the activation screen).</li>
<li><strong>UPI</strong> — scan the QR / copy the UPI ID, pay, and share the screenshot with support; activation within 24 hours.</li>
<li><strong>Refer &amp; Earn</strong> — share your referral link; earn Rs.100 per successful referral.</li>
</ul>`
    },
    {
      id: 'faq', num: 18, title: 'Troubleshooting & FAQ',
      html: `
<details class="faq"><summary>The map is blank / pins don't load.</summary><div class="faq-body"><p>Map tiles need internet the first time. Check your connection; previously viewed areas work offline.</p></div></details>
<details class="faq"><summary>"Use current location" fails.</summary><div class="faq-body"><p>Grant location permission, turn GPS on, and try in an open area. Indoors the app falls back to your last known location.</p></div></details>
<details class="faq"><summary>Auto-backup isn't running.</summary><div class="faq-body"><p>It requires the Diamond plan, a connected Google Drive account, the toggle enabled, and internet. Backups run once per day.</p></div></details>
<details class="faq"><summary>The print option doesn't appear after saving a loan/EMI.</summary><div class="faq-body"><p>Thermal printing must be <strong>enabled</strong> in Settings → Thermal printer <em>and</em> a printer must be currently connected. Also, the receipt sheet only appears for customers with a phone number and SMS notifications enabled.</p></div></details>
<details class="faq"><summary>I can't turn Privacy Mode / Biometric Lock off.</summary><div class="faq-body"><p>Passcode Lock is on — enter your 4-digit passcode. Forgot it? Contact support.</p></div></details>
<details class="faq"><summary>A customer paid more than the EMI / paid early.</summary><div class="faq-body"><p>Enter any amount up to the balance when adding an EMI — the schedule and due date adjust automatically.</p></div></details>
<details class="faq"><summary>I edited a loan — what happens to old payments?</summary><div class="faq-body"><p>Nothing. Recorded installments are preserved; the app recalculates the balance as new total − already repaid, and blocks totals lower than the repaid amount.</p></div></details>
<details class="faq"><summary>How do I move to a new phone?</summary><div class="faq-body"><p>Old phone: Settings → BackUp &amp; Restore → Download Backup (or Backup &amp; Share). New phone: install → Welcome screen → Restore → pick the <code>.zip</code>.</p></div></details>
<details class="faq"><summary>Something else?</summary><div class="faq-body"><p>Settings → <strong>Contact Support</strong> — email (reply within 24 hours), WhatsApp group, and a Tamil demo video.</p></div></details>
<p style="margin-top:18px;font-size:13.5px;color:var(--gray);"><em>This guide describes Vasool Collection Tracker v1.0. Some features require the Premium or Diamond plan as marked.</em></p>`
    }
  ]
};
