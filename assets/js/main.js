let emails = [{
    subject: "Software Engineer Position Resume",
    from: "caseytravers33434@mail.com",
    name: "Casey Travers",
    body: `<p>attachment: word doc
      <br>Good Morning,
      <br>My name is Casey Travers and I previously spoke to someone about the Software
      Engineer Position at your company and wanted to send you my resume to be considered
      for the postion! I’ve attached my resume in this email, please let me know if there
      is anything else I can do!
      <br>Thank you,
      <br>Casey Travers</p>`,
    bodyprev: `Good Morning, My name is Casey Travers and I previously spoke to someone
    about the Software Engineer Position at your company and wanted to send you my resume`
  },
  {
    subject: "Your Account Password Must Be Updated",
    from: "accountreset@netflix.com",
    name: "Netflix Account",
    body: `
          <div class="col-2"></div>
            <div class="col-8" style="background-color:#FAF9F8; padding:10px 20px; font-size: 20px;">
              <p><b>Reset Your Netflix Password</b>
                <div class="row" style="height:20px;"></div>
                Seems like there has been a suspicious attempt to log into your account.
                Your password must be reset at this time in order to continue using
                your account and prevent any future suspicious logins.
              </p>
              <div class="row" style="height:40px;"></div>
              <form action="/action_page.php">
                <label for="fname">Username:</label>
                <input type="text" id="fname" name="fname""><br><br>
                <label for="fname">Old Password:</label>
                <input type="text" id="fname" name="fname""><br><br>
                <label for="lname">New Password:</label>
                <input type="text" id="lname" name="lname""><br><br>
                <div class="row" style="height:10px;"></div>
                <div class="col-12 text-center">
                  <button type="button" class="btn btn-danger" value="Submit">Submit</button>
                </div>
                <div class="row" style="height:10px;"></div>
              </form>
            </div>`
  },
  {
    subject: "Project Collaboration Google Doc",
    from: "terreasa@company.com",
    name: "Terreasa Jalen",
    body: `<div class="col-2"></div>
    <div class="col-8">
    <div class="row" style="height:40px;"></div>
      Hey,
      <br>Here is the link for the google doc for the Bose Trajectory Project. Make sure
      to take a look at it today so you can get up to speed with what happened at the meeting!
      We should have at least a clear understanding of our timeline by tomorrow so
      take a look ASAP please.
      Feel free to make any comments or suggestions.
      <div class="row" style="height:20px;"></div>
      <a href="https://docs.gooogle.com/document/d/1Q558FGAlZYcqow5hwXQdKLNQLi_I/edit?usp=sharing">https://docs.google.com/document/d/1Q558FGAlZYcqow5hwXQdKLNQLi_I/edit?usp=sharing</a>
      <div class="row" style="height:20px;"></div>
      Terreasa
      <br><p style="color:grey;">CTO</p>
    </div>`
  },
  {
    subject: "Shared a Doc With You",
    from: "shareddoc@gmail.com",
    name: "Google Docs",
    body: `
    <div class="col-2"></div>
    <div class="col-8" style="font-size:24px; border-radius: 10px; outline:#ccc solid 1px; padding:20px;">
      <h2><b>Jared Drachse shared a document</b><h2>
      <p>Jared Drachse (<a href="jaredrachse@yourcompany.com" style="text-decoration:none; color:black;">jaredrachse@yourcompany.com</a>) has invited you to edit the following document:</p>
      <div class="row" style="height:20px;"></div>
      <div class="col-12 text-center">
        <a href="https://docs.gooogle.com/document/d/1Qfd513FGd53ZYcqow5hdsghTEDCDQdKLNQLi_I/edit?usp=sharing" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Open</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6" style="font-size:10px;">
      Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
You have received this email because jaredrachse@yourcompany.com shared a document with you from Google Docs.
      </div>
    </div>`
  },
  {
    subject: "Amazon Account Cancellation",
    from: "primary@amazon.com",
    name: "Amazon Prime",
    body: `<div class="col-2"></div>
    <div class="col-8" style="background-color:#FAF9F8; padding:10px 20px;">
      <h2><b>We're Sorry to See You Go</b></h2>
        <p><br>Protecting your privacy and the security of your data is and has always been
        a top priority for Amazon. We received a request for your account to be closed
        and your information delted. If you submitted this request and woud like to proceed,
        please click the <b>confirmation</b> button below.
        <br>
        please note this is a <b>permanent</b> action and once your account is closed it will
        no longer be accessable.
        <br>
        Once we receive your confirmation, we will process your request.
      </p>
      <br>
      <div class="row">
        <div class="col-12 text-center">
          <a href="https://prime.amazon.com/account/delete/1Qfd513FGd53ZYcqow5hdsghTE" class="btn btn-warning btn-lg active" role="button" aria-pressed="true">Sign Up</a>
        </div>
      </div>
    </div>`
  },
  // {
  //   subject: "Software Engineer Position Resume",
  //   from: "caseytravers33434@mail.com",
  //   name: "Casey Travers",
  //   body: `<p>Hello <b>world</b></p>`
  // },
  {
    subject: "Twilio Client Meeting Update",
    from: "dustinalexander@yourcompany.com",
    name: "Dustin Alexander",
    body: `
    <div class="col-12">
    <p>Hey,
    <br> I'm on my way from a client meeting right now and need help ASAP. The client
    requested a refund that needs to be processed by <b>tomorrow</b> or else they said,
    they'd drop us. Please transfer $15,000 to their business account as soon as you
    see this:
    <div class="row" style="height:20px;"></div>
    <br> Account:1650564036
    <br> Routing800053492
    <div class="row" style="height:20px;"></div>
    <br>I have another meeting right after this one so I only have my phone with me, please
    make sure to reply to this email when your done.
    <br> Thanks,
    <br> Dustin
    <br><p style="color:grey;">CFO</p>
    </div>`
  },
  {
    subject: "Project Collaboration Google Doc",
    from: "terreasa@company.com",
    name: "Terreasa Jalen",
    body: `<p><hr><hr>Hello <b>world</b></p>`
  },
  {
    subject: "Shared a Doc With You",
    from: "shareddoc@gmail.com",
    name: "Google Docs",
    body: `<div class="col-2"></div>
    <div class="col-8" style="font-size:24px; border-radius: 10px; outline:#ccc solid 1px; padding:20px;">
      <h2><b>Ruben Johnsoin shared a document</b><h2>
      <p>Ruben Johnsoin (<a href="rubenjohnsoin@yourcompany.com" style="text-decoration:none; color:black;">rubenjohnsoin@yourcompany.com</a>) has invited you to edit the following document:</p>
      <div class="row" style="height:20px;"></div>
      <div class="col-12 text-center">
        <a href="https://docs.google.com/document/d/1Qfd513FGd53ZYcqow5hdsghTEDCDQdKLNQLi_I/edit?usp=sharing" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Open</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6" style="font-size:10px;">
      Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
You have received this email because rubenjohnsoin@yourcompany.com shared a document with you from Google Docs.
      </div>
    </div>`
  },
  {
    subject: "Microsoft Account Cancellation",
    from: "donotreply@microsoft.com",
    name: "Microsoft Accounts",
    body: `
    <div class="col-2"></div>
    <div class="col-8" style="background-color:#FAF9F8; padding:10px 20px;">
      <h2><b>Your Account Termination Process Has Begun.</b></h2>
      <p><br>We received your request on 12/02/22 to terminate your microsoft account.
        Please confirm this request to complete the deletion process or cancel to avoid
        closure of your microsoft account: Failure to comply within <b>2 weeks</b> will lead to automatic
        de-activation.
      </p>
      <div class="row" style="height:20px;"></div>
      <div class="row">
        <div class="col-12 text-center">
          <a href="https://account.microsoft.com/account/delete/1Qfd513FGd53ZYcqow5hdsghTE" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" style="border-radius:0;">Confirm deactivation</a>
        </div>
        <div class="row" style="height:20px;"></div>
        <div class="col-12 text-center">
          <a href="https://account.microsoft.com/account/delete/1Qfd513FGd53ZYcqow5hdsghTE" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" style="border-radius:0;">Cancel the request</a>
        </div>
      </div>
      <div class="row" style="height:30px;"></div>
      If this was a mistake, quickly take action to stop this process. If not, please
      ignore this message and your account will be terminated shortly.
    </div>`
  }


];

// extracting just the words from body (no html elements)
function extractContent(s) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};


// setting up the rest of html doc
$(document).ready(function() {
  // loop through emails and add them to the list on the left...
  let emailList = "";

  let body_list = [];
  emails.forEach(function(obj, i) {
    // console.log(obj.body);
    body_list.push(extractContent(obj.body));
  })


  emails.forEach(function(obj, i) {
    // console.log(obj, i);
    emailList += `

        <a href="#" class="email" data-email="${i}">
          <div class="row" style="height:95px;">
            <div class="col-9" style="padding:10px 10px 10px 40px;">


          <b>${obj.name}</b> <br>
          ${obj.subject.length > 27 ? obj.subject.substr(0,27)+'...' : obj.subject}<br>
          <small>${body_list[i].substr(0,20)}</small>


          </div>

          <div class="col-1 trash">
            <svg  width="19" height="24" viewBox="0 0 19 24" fill="black" fill-opacity="0" xmlns="http://www.w3.org/2000/svg">
              <a href="mailpractice.html">
              <path d="M4 23L1 4.88235H18L15 23H4Z" stroke="#6B6767" stroke-width="0.5"/>
              <path d="M1 4.01961V2.29412H8V1H11V2.29412H18V4.01961H1Z" stroke="#6B6767" stroke-width="0.5"/>
              </a>
            </svg>

          </div>
          <div class="col-1 flag text-center">
          <svg width="19" height="23" viewBox="0 0 19 23" fill="red" fill-opacity="0" xmlns="http://www.w3.org/2000/svg">
            <a href="mailpractice.html">
            <path d="M1 13.18V1.42V1H3.125V2.26L18 7.72L3.125 13.18V22H1V13.18Z" stroke="#6B6767" stroke-width="0.5"/>
            </a>
          </svg>

          </div>
        </div>
        </a>

     `;
  });
  $(".emailList").html(emailList);

  // add listener to each email clicked
  $(".email").on("click", function() {
    // alert($(this).data("email"));

    // mark this email as read
    $(this).addClass("read");

    // variable to hold email
    let str = "";
    // get the email number and then the email from the list
    let id = $(this).data("email");
    let obj = emails[id];
    str += `
      ${obj.subject}<br>
      ${obj.from}<br>
      <hr>
      <div class="row">
        ${obj.body}<br>
        </div>
    `;

    $(".email-body").html(str);
  });
});





// https://stackoverflow.com/questions/28899298/extract-the-text-out-of-html-string-using-javascript (code for extracting body)
