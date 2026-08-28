"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const content = LILI_CONTENT;


  // ==================== 共通関数 ====================

  function getElement(id) {
    return document.getElementById(id);
  }


  function setText(id, value) {
    const element = getElement(id);

    if (element) {
      element.textContent = value || "";
    }
  }


  function escapeHTML(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function safeUrl(value) {
    if (!value) {
      return "";
    }

    try {
      const parsedUrl = new URL(value);

      if (
        parsedUrl.protocol === "https:" ||
        parsedUrl.protocol === "http:"
      ) {
        return parsedUrl.href;
      }

      return "";

    } catch (error) {
      return "";
    }
  }


  // ==================== 開催情報 ====================

  setText(
    "eventDate",
    content.event.date
  );

  setText(
    "eventTime",
    content.event.time
  );

  setText(
    "eventVenue",
    content.event.venue
  );

  setText(
    "eventCapacity",
    content.event.capacity
  );

  setText(
    "entryCapacity",
    content.event.capacity
  );

  setText(
    "accessVenue",
    content.event.venue
  );

  setText(
    "accessAddress",
    content.event.address
  );

  setText(
    "accessStation",
    content.event.station
  );


  const eventHighlights =
    Array.isArray(content.event.highlights)
      ? content.event.highlights
      : [];

  const eventHighlightsElement =
    getElement("eventHighlights");


  if (eventHighlightsElement) {
    eventHighlightsElement.innerHTML =
      eventHighlights
        .map(function (highlight) {
          return (
            "<li>" +
            escapeHTML(highlight) +
            "</li>"
          );
        })
        .join("");
  }


  const accessOfficialLink =
    getElement("accessOfficialLink");

  const officialAccessUrl =
    safeUrl(content.event.accessUrl);


  if (
    accessOfficialLink &&
    officialAccessUrl
  ) {
    accessOfficialLink.href =
      officialAccessUrl;

    accessOfficialLink.target =
      "_blank";

    accessOfficialLink.rel =
      "noopener noreferrer";
  }


  // ==================== 友達紹介 ====================

  setText(
    "referralTitle",
    content.referral.title
  );

  setText(
    "referralNote",
    content.referral.note
  );


  // ==================== 当日出会える人 ====================

  const speakerGrid =
    getElement("speakerGrid");

  const speakers =
    Array.isArray(content.speakers)
      ? content.speakers
      : [];


  if (speakerGrid) {
    speakerGrid.innerHTML =
      speakers
        .map(function (speaker) {

          const career =
            Array.isArray(speaker.career)
              ? speaker.career
              : [];

          const careerHTML =
            career
              .map(function (step, index) {
                return (
                  '<li><span>' +
                  String(index + 1).padStart(2, "0") +
                  '</span><strong>' +
                  escapeHTML(step) +
                  "</strong></li>"
                );
              })
              .join("");

          return (
            '<article class="speaker-card">' +

            '<div class="speaker-symbol" aria-hidden="true">' +
            escapeHTML(speaker.initial) +
            "</div>" +

            '<div class="speaker-body">' +

            '<p class="speaker-type">' +
            escapeHTML(speaker.type) +
            "</p>" +

            "<h3>" +
            escapeHTML(speaker.name) +
            "</h3>" +

            '<p class="speaker-role">' +
            escapeHTML(speaker.role) +
            "</p>" +

            '<ol class="career-path">' +
            careerHTML +
            "</ol>" +

            '<p class="speaker-description">' +
            "<strong>今の仕事</strong>" +
            escapeHTML(speaker.description) +
            "</p>" +

            '<p class="speaker-talk">' +
            "<strong>当日聞けること</strong>" +
            escapeHTML(speaker.talk) +
            "</p>" +

            "</div>" +

            "</article>"
          );
        })
        .join("");
  }


  // ==================== 参加企業 ====================

  const companyGrid =
    getElement("companyGrid");

  const companies =
    Array.isArray(content.companies)
      ? content.companies
      : [];


  if (companyGrid) {
    companyGrid.innerHTML =
      companies
        .map(function (company) {

          const companyUrl =
            safeUrl(company.url);

          let companyName =
            escapeHTML(company.name);


          if (companyUrl) {
            companyName =
              '<a class="company-link"' +
              ' href="' +
              escapeHTML(companyUrl) +
              '"' +
              ' target="_blank"' +
              ' rel="noopener noreferrer">' +
              escapeHTML(company.name) +
              "</a>";
          }


          return (
            '<article class="company-card">' +

            '<div class="company-meta">' +

            '<span class="booth-label">' +
            escapeHTML(company.booth) +
            "</span>" +

            '<span class="industry-label">' +
            escapeHTML(company.industry) +
            "</span>" +

            "</div>" +

            "<h3>" +
            companyName +
            "</h3>" +

            '<p class="company-point">' +

            "<span>魅力ポイント</span>" +

            escapeHTML(company.appeal) +

            "</p>" +

            "</article>"
          );
        })
        .join("");
  }


  // ==================== イベントチラシ ====================

  const flyer =
    content.flyer || {};

  const flyerFrontPreview =
    getElement("flyerFrontPreview");

  const flyerBackPreview =
    getElement("flyerBackPreview");

  const flyerLink =
    getElement("flyerLink");

  const flyerStatus =
    getElement("flyerStatus");


  function safeContentPath(value) {
    const absoluteUrl =
      safeUrl(value);

    if (absoluteUrl) {
      return absoluteUrl;
    }

    if (
      value &&
      !/^[a-z][a-z0-9+.-]*:/i.test(value)
    ) {
      return String(value);
    }

    return "";
  }


  const flyerFrontImage =
    safeContentPath(flyer.frontImage);

  const flyerBackImage =
    safeContentPath(flyer.backImage);

  const flyerPdfUrl =
    safeContentPath(flyer.pdfUrl);


  if (
    flyerFrontPreview &&
    flyerFrontImage
  ) {
    flyerFrontPreview.innerHTML =
      '<img src="' +
      escapeHTML(flyerFrontImage) +
      '" alt="LiLi EXPO イベントチラシ 表面">';
  }


  if (
    flyerBackPreview &&
    flyerBackImage
  ) {
    flyerBackPreview.innerHTML =
      '<img src="' +
      escapeHTML(flyerBackImage) +
      '" alt="LiLi EXPO イベントチラシ 裏面">';
  }


  if (
    flyerLink &&
    flyerPdfUrl
  ) {
    flyerLink.href =
      flyerPdfUrl;

    flyerLink.target =
      "_blank";

    flyerLink.rel =
      "noopener noreferrer";

    flyerLink.hidden =
      false;


    if (flyerStatus) {
      flyerStatus.hidden =
        true;
    }
  }


  // ==================== 当日のプログラム ====================

  function renderProgram(
    program,
    descriptionId,
    pointsId
  ) {
    if (!program) {
      return;
    }


    setText(
      descriptionId,
      program.description
    );


    const pointsElement =
      getElement(pointsId);

    const points =
      Array.isArray(program.points)
        ? program.points
        : [];


    if (pointsElement) {
      pointsElement.innerHTML =
        points
          .map(function (point) {
            return (
              "<li>" +
              escapeHTML(point) +
              "</li>"
            );
          })
          .join("");
    }
  }


  const programs =
    content.programs || {};


  renderProgram(
    programs.seminar,
    "seminarProgramDescription",
    "seminarProgramPoints"
  );


  renderProgram(
    programs.roundtable,
    "roundtableProgramDescription",
    "roundtableProgramPoints"
  );


  // ==================== LiLi Career ====================

  setText(
    "aboutLiLiText",
    content.about.introduction
  );

  setText(
    "whyWomenText",
    content.about.whyWomen
  );


  const careerFeatureGrid =
    getElement("careerFeatureGrid");

  const careerFeatures =
    Array.isArray(content.about.features)
      ? content.about.features
      : [];


  if (careerFeatureGrid) {
    careerFeatureGrid.innerHTML =
      careerFeatures
        .map(function (feature) {
          return (
            '<article class="career-feature-card">' +

            "<span>" +
            escapeHTML(feature.number) +
            "</span>" +

            "<h3>" +
            escapeHTML(feature.title) +
            "</h3>" +

            "</article>"
          );
        })
        .join("");
  }


  // ==================== 会社概要 ====================

  setText(
    "organizationName",
    content.organization.name
  );

  setText(
    "organizationService",
    content.organization.service
  );

  setText(
    "organizationBusiness",
    content.organization.business
  );

  setText(
    "organizationContact",
    content.organization.contact
  );


  const organizationWebsite =
    getElement("organizationWebsite");

  const organizationWebsiteUrl =
    safeUrl(content.organization.website);


  if (organizationWebsite) {

    if (organizationWebsiteUrl) {

      organizationWebsite.textContent =
        organizationWebsiteUrl;

      organizationWebsite.href =
        organizationWebsiteUrl;

      organizationWebsite.target =
        "_blank";

      organizationWebsite.rel =
        "noopener noreferrer";

    } else {

      organizationWebsite.textContent =
        "確認中";

      organizationWebsite.removeAttribute(
        "href"
      );
    }
  }


  // ==================== SNS ====================

  const socialLinks =
    getElement("socialLinks");

  const socials =
    Array.isArray(content.socials)
      ? content.socials
      : [];


  if (socialLinks) {
    socialLinks.innerHTML =
      socials
        .map(function (social) {

          const socialUrl =
            safeUrl(social.url);


          if (socialUrl) {
            return (
              '<a class="social-link"' +

              ' href="' +
              escapeHTML(socialUrl) +
              '"' +

              ' target="_blank"' +

              ' rel="noopener noreferrer">' +

              "<span>" +
              escapeHTML(social.label) +
              "</span>" +

              "<span>↗</span>" +

              "</a>"
            );
          }


          return (
            '<span class="social-link is-pending">' +

            "<span>" +
            escapeHTML(social.label) +
            "</span>" +

            "<small>URL確認中</small>" +

            "</span>"
          );
        })
        .join("");
  }


  // ==================== よくある質問 ====================

  const faqList =
    getElement("faqList");

  const faq =
    Array.isArray(content.faq)
      ? content.faq
      : [];


  if (faqList) {
    faqList.innerHTML =
      faq
        .map(function (item) {
          return (
            "<details>" +

            "<summary>" +
            escapeHTML(item.question) +
            "</summary>" +

            "<p>" +
            escapeHTML(item.answer) +
            "</p>" +

            "</details>"
          );
        })
        .join("");
  }


  // ==================== 参加予約ボタン ====================

  const registration =
    content.registration || {};

  const registrationUrl =
    safeUrl(registration.url);


  setText(
    "entryNote",
    registration.note
  );


  document
    .querySelectorAll(".registration-link")
    .forEach(function (link) {

      link.textContent =
        registration.buttonText ||
        "無料で参加予約する";


      if (registrationUrl) {

        link.href =
          registrationUrl;

        link.target =
          "_blank";

        link.rel =
          "noopener noreferrer";

      } else {

        link.href =
          "#entry";

        link.removeAttribute(
          "target"
        );

        link.removeAttribute(
          "rel"
        );
      }
    });


  // ==================== スマホメニュー ====================

  const menuButton =
    getElement("menuButton");

  const globalNav =
    getElement("globalNav");


  function closeMenu() {

    if (
      !menuButton ||
      !globalNav
    ) {
      return;
    }


    menuButton.classList.remove(
      "is-open"
    );

    globalNav.classList.remove(
      "is-open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "menu-open"
    );
  }


  if (
    menuButton &&
    globalNav
  ) {

    menuButton.addEventListener(
      "click",
      function () {

        const isOpen =
          globalNav.classList.toggle(
            "is-open"
          );


        menuButton.classList.toggle(
          "is-open",
          isOpen
        );


        menuButton.setAttribute(
          "aria-expanded",
          String(isOpen)
        );


        document.body.classList.toggle(
          "menu-open",
          isOpen
        );
      }
    );


    globalNav
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener(
          "click",
          closeMenu
        );
      });


    window.addEventListener(
      "resize",
      function () {

        if (
          window.innerWidth > 760
        ) {
          closeMenu();
        }
      }
    );
  }


  // ==================== 年号 ====================

  setText(
    "currentYear",
    new Date().getFullYear()
  );

});