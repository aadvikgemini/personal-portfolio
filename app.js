/**
 * SpecFlow - PRD Template & Builder Interactive Application
 * Modern, accessible, zero-dependency vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Toast Notification Helper
  // --------------------------------------------------------------------------
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, duration = 3000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 200);
    }, duration);
  }

  // --------------------------------------------------------------------------
  // 2. Sticky Header & Active Nav Links on Scroll
  // --------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header shadow toggle
    if (scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    // Active nav link highlight
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. FAQ Accordion Toggle
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question-btn');
    button?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question-btn')?.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Pricing Billing Period Toggle (Monthly / Annual)
  // --------------------------------------------------------------------------
  const billingToggle = document.getElementById('billingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');
  const priceProAmount = document.getElementById('priceProAmount');
  const priceTeamAmount = document.getElementById('priceTeamAmount');
  const priceProPeriod = document.getElementById('priceProPeriod');
  const priceTeamPeriod = document.getElementById('priceTeamPeriod');

  let isAnnual = false;

  function updatePricing() {
    if (!billingToggle) return;

    if (isAnnual) {
      billingToggle.classList.add('annual');
      annualLabel?.classList.add('active');
      monthlyLabel?.classList.remove('active');

      if (priceProAmount) priceProAmount.textContent = '$15';
      if (priceTeamAmount) priceTeamAmount.textContent = '$39';
      if (priceProPeriod) priceProPeriod.textContent = '/ month, billed annually';
      if (priceTeamPeriod) priceTeamPeriod.textContent = '/ month, billed annually';
    } else {
      billingToggle.classList.remove('annual');
      monthlyLabel?.classList.add('active');
      annualLabel?.classList.remove('active');

      if (priceProAmount) priceProAmount.textContent = '$19';
      if (priceTeamAmount) priceTeamAmount.textContent = '$49';
      if (priceProPeriod) priceProPeriod.textContent = '/ month, billed monthly';
      if (priceTeamPeriod) priceTeamPeriod.textContent = '/ month, billed monthly';
    }
  }

  billingToggle?.addEventListener('click', () => {
    isAnnual = !isAnnual;
    updatePricing();
  });

  monthlyLabel?.addEventListener('click', () => {
    isAnnual = false;
    updatePricing();
  });

  annualLabel?.addEventListener('click', () => {
    isAnnual = true;
    updatePricing();
  });

  // --------------------------------------------------------------------------
  // 6. Template Visualizer Section Links
  // --------------------------------------------------------------------------
  const templateSecLinks = document.querySelectorAll('.template-sec-link');
  const templateDocContainer = document.getElementById('templateDocContainer');

  templateSecLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement && templateDocContainer) {
        templateSecLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Scroll within the document container
        const targetOffset = targetElement.offsetTop - templateDocContainer.offsetTop;
        templateDocContainer.scrollTo({
          top: targetOffset - 16,
          behavior: 'smooth'
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Copy & Download Full 12-Section Standard Markdown Template
  // --------------------------------------------------------------------------
  const standardPrdMarkdown = `# [Product Name] — Product Requirements Document (PRD)

**Status:** Draft | In Review | Approved | In Development | Released  
**Version:** v1.0  
**Owner / Author:** [Author Name, Role]  
**Tech Lead:** [Engineering Lead Name]  
**Design Lead:** [Product Designer Name]  
**Target Release Date:** [YYYY-MM-DD]  
**Last Updated:** [YYYY-MM-DD]

---

## 1. Executive Summary
Provide a concise 2–3 sentence overview of what is being built, the primary problem it solves, and the high-level business impact expected upon launch.

---

## 2. Problem Statement
- **User Pain Point:** What acute friction, inefficiency, or blocker do users face today?
- **Evidence & Quantitative Data:** Customer interview quotes, support ticket volume, drop-off rates, or analytics data.
- **Why Now:** Why is solving this problem critical for the business and product strategy right now?

---

## 3. Goals and Success Metrics
### Primary Business Goal
- State the singular North Star outcome this initiative drives.

### Metrics Framework
| Metric Type | Metric Name | Baseline | Target Goal | Tracking Method |
| :--- | :--- | :--- | :--- | :--- |
| **Primary KPI** | e.g. 30-Day Retention Rate | 42% | 55% | Mixpanel / Amplitude Funnel |
| **Leading Indicator** | e.g. Feature Adoption in W1 | 0% | > 35% of MAU | Telemetry Event \`feature_engaged\` |
| **Guardrail Metric** | e.g. App Crash / Error Rate | 0.08% | < 0.10% | Sentry Alert Threshold |

---

## 4. Target Users & Personas
- **Primary Persona:** [Persona Name, e.g. Growth Marketing Lead]
  - *Context:* Needs to launch A/B tests rapidly without waiting for dev cycles.
  - *Key Frustration:* High technical friction in setting up custom tracking tags.
- **Secondary Persona:** [Persona Name, e.g. Data Analyst]
  - *Needs:* Clean, consistent event naming and schema exports.
- **User Segments:** Self-serve users vs. Enterprise tier accounts.

---

## 5. Solution Overview & Architecture
High-level description of the chosen solution approach.
- Explain the user mental model and key value proposition.
- Architectural diagram or system topology link (e.g., Figma or Miro URL).

---

## 6. Functional Requirements & User Stories
| ID | User Story | Acceptance Criteria (Given / When / Then) | Priority |
| :--- | :--- | :--- | :--- |
| **REQ-01** | *As a user, I want to authenticate via Google SSO so that I don't need another password.* | **Given** an unauthenticated user on the login screen, **When** they click "Sign in with Google", **Then** authenticate via OAuth2 and redirect to dashboard. | P0 |
| **REQ-02** | *As an admin, I want to export audit logs to CSV so that I can satisfy compliance audits.* | **Given** an admin user on Settings > Audit, **When** they click "Export CSV", **Then** download a dated CSV of all events within 2 seconds. | P1 |

---

## 7. User Flow & Journey
1. **Entry Point:** User navigates to dashboard and encounters the new action banner.
2. **Configuration Step:** Completes 3-step onboarding modal.
3. **Execution:** Triggers automated workflow and views live progress indicator.
4. **Completion:** Receives success confirmation and shareable preview link.

---

## 8. Scope Boundaries
| In-Scope (v1.0 Launch) | Out-of-Scope (Deferred to v2.0+) |
| :--- | :--- |
| ✅ Desktop web responsive view | ❌ Native iOS / Android apps |
| ✅ Direct export to PDF and Markdown | ❌ Live bidirectional Notion API sync |
| ✅ Email digest notification | ❌ SMS / WhatsApp alert integrations |

---

## 9. Assumptions, Dependencies, and Technical Risks
- **Assumptions:** 80% of active users access via Chrome or Safari on desktop.
- **Dependencies:** Platform team completes V2 Auth Service migration before Sprint 16.
- **Technical Risks & Mitigation:**
  - *Risk:* High latency during peak export hours.
  - *Mitigation:* Offload PDF generation to asynchronous background BullMQ queue.

---

## 10. Release & Rollout Plan
- **Phase 1 (Alpha):** Internal dogfooding with product & engineering teams (Week 1–2).
- **Phase 2 (Closed Beta):** 10 friendly enterprise design partners under feature flag \`flag_new_canvas\` (Week 3–4).
- **Phase 3 (GA Release):** 100% rollout with marketing campaign, changelog announcement, and docs update (Week 5).

---

## 11. Open Questions & Decision Log
| Question | Owner | Status | Decision / Resolution |
| :--- | :--- | :--- | :--- |
| Do we require billing upgrades for team sharing? | Alex (PM) | Resolved | Free for up to 3 viewers; Pro required for unlimited editors. |
| What rate limit should apply to public review links? | Dave (Tech Lead) | Open | Proposing 60 requests/minute per IP address. |
`;

  const copyTemplateBtn = document.getElementById('copyTemplateBtn');
  const downloadTemplateBtn = document.getElementById('downloadTemplateBtn');

  copyTemplateBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(standardPrdMarkdown);
      showToast('Standard 12-section PRD template copied to clipboard!');
    } catch (err) {
      // Fallback
      fallbackCopyText(standardPrdMarkdown);
      showToast('Template copied to clipboard!');
    }
  });

  downloadTemplateBtn?.addEventListener('click', () => {
    downloadFile('prd-standard-template.md', standardPrdMarkdown, 'text/markdown');
    showToast('Downloaded prd-standard-template.md');
  });

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  }

  function downloadFile(filename, content, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // --------------------------------------------------------------------------
  // 8. PRD Builder Modal & Form Logic
  // --------------------------------------------------------------------------
  const prdModal = document.getElementById('prdModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const startPrdBtns = document.querySelectorAll('.trigger-prd-builder');
  const prdForm = document.getElementById('prdForm');
  const loadSampleBtn = document.getElementById('loadSampleBtn');
  const clearFormBtn = document.getElementById('clearFormBtn');

  // Modal Views
  const formView = document.getElementById('formView');
  const generatedView = document.getElementById('generatedView');
  const editInputsBtn = document.getElementById('editInputsBtn');
  const copyGeneratedMdBtn = document.getElementById('copyGeneratedMdBtn');
  const downloadGeneratedMdBtn = document.getElementById('downloadGeneratedMdBtn');
  const printPrdBtn = document.getElementById('printPrdBtn');

  // Input Fields
  const inputProductName = document.getElementById('productName');
  const inputProblemStatement = document.getElementById('problemStatement');
  const inputTargetUsers = document.getElementById('targetUsers');
  const inputGoals = document.getElementById('goals');
  const inputKeyFeatures = document.getElementById('keyFeatures');
  const inputSuccessMetrics = document.getElementById('successMetrics');
  const inputInScope = document.getElementById('inScope');
  const inputOutScope = document.getElementById('outScope');
  const inputReleaseDate = document.getElementById('releaseDate');

  // Set default target release date to 60 days from now
  if (inputReleaseDate && !inputReleaseDate.value) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 60);
    inputReleaseDate.value = futureDate.toISOString().split('T')[0];
  }

  function openModal() {
    if (!prdModal) return;
    prdModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Focus first input
    setTimeout(() => {
      inputProductName?.focus();
    }, 100);
  }

  function closeModal() {
    if (!prdModal) return;
    prdModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  startPrdBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // If mobile nav was open, close it
      mobileNav?.classList.remove('open');
      openModal();
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);

  prdModal?.addEventListener('click', (e) => {
    if (e.target === prdModal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && prdModal?.classList.contains('open')) {
      closeModal();
    }
  });

  // Pre-fill Sample Realistic PM Data
  const sampleData = {
    productName: 'PulseIQ: Automated Customer Health & Churn Predictor',
    problemStatement: `Customer Success teams currently detect account churn risks 2–3 weeks too late because product usage telemetry is scattered across Snowflake, Zendesk tickets, and Stripe billing logs.\n\nBy the time an executive sponsor requests a contract cancellation, it is too late for account teams to intervene. We need an automated early warning system that scores account health and proactively triggers intervention playbooks.`,
    targetUsers: `• B2B Enterprise Customer Success Managers (CSMs) managing 50+ accounts\n• Heads of Customer Success needing portfolio-wide retention visibility\n• Revenue Operations Leads configuring automated alert rules`,
    goals: `1. Reduce 90-day logo churn by 18% across high-tier enterprise accounts.\n2. Empower CSMs to identify at-risk accounts in under 30 seconds upon daily morning login.\n3. Automate weekly health digest alerts to dedicated account Slack channels.`,
    keyFeatures: `• Unified Account Health Score (0–100) aggregating login recency, feature depth, and open P1 tickets.\n• Proactive Slack Alert Webhooks triggered whenever an account drops by > 15 points in 7 days.\n• One-Click Retention Playbooks with pre-drafted executive check-in email templates.\n• Executive Risk Radar Dashboard showing revenue-weighted churn vulnerability cohorts.`,
    successMetrics: `• Primary Business KPI: Enterprise logo retention increases from 86% to 92% in first 2 quarters post-launch.\n• Leading Indicator: 75% of assigned CSMs open and act on risk alerts within 2 hours of notification.\n• Guardrail Metric: False-positive alert rate remains below 8% to prevent notification fatigue.`,
    inScope: `• Pre-built ingestion connectors for Zendesk, Stripe, and Segment event streams.\n• Rule-based composite scoring engine with configurable weight sliders.\n• Slack notification integration with interactive "Acknowledge" buttons.\n• Clean CSV and PDF export for weekly Executive Business Reviews (QBRs).`,
    outScope: `• Native bidirectional CRM write-back to Salesforce/HubSpot (deferred to v2.0).\n• Custom predictive AI neural network training per tenant (v1 utilizes heuristic rule weights).\n• Native iOS/Android mobile apps (responsive desktop web only for launch).`,
    releaseDate: '2026-12-15'
  };

  loadSampleBtn?.addEventListener('click', () => {
    if (inputProductName) inputProductName.value = sampleData.productName;
    if (inputProblemStatement) inputProblemStatement.value = sampleData.problemStatement;
    if (inputTargetUsers) inputTargetUsers.value = sampleData.targetUsers;
    if (inputGoals) inputGoals.value = sampleData.goals;
    if (inputKeyFeatures) inputKeyFeatures.value = sampleData.keyFeatures;
    if (inputSuccessMetrics) inputSuccessMetrics.value = sampleData.successMetrics;
    if (inputInScope) inputInScope.value = sampleData.inScope;
    if (inputOutScope) inputOutScope.value = sampleData.outScope;
    if (inputReleaseDate) inputReleaseDate.value = sampleData.releaseDate;

    showToast('Loaded realistic sample PRD data!');
  });

  clearFormBtn?.addEventListener('click', () => {
    prdForm?.reset();
    showToast('Form cleared.');
  });

  // --------------------------------------------------------------------------
  // 9. Form Submission & Formatted PRD Rendering
  // --------------------------------------------------------------------------
  let currentGeneratedMarkdown = '';

  prdForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      productName: inputProductName?.value.trim() || 'Untitled Product',
      problemStatement: inputProblemStatement?.value.trim() || 'No problem statement provided.',
      targetUsers: inputTargetUsers?.value.trim() || 'Cross-functional users',
      goals: inputGoals?.value.trim() || 'Drive product outcomes and team alignment.',
      keyFeatures: inputKeyFeatures?.value.trim() || 'Key capabilities to be detailed.',
      successMetrics: inputSuccessMetrics?.value.trim() || 'Metrics to be measured upon release.',
      inScope: inputInScope?.value.trim() || 'Core MVP scope items.',
      outScope: inputOutScope?.value.trim() || 'Future release enhancements.',
      releaseDate: inputReleaseDate?.value || 'TBD',
      createdDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    renderFormattedPrd(data);

    // Switch view
    if (formView && generatedView) {
      formView.style.display = 'none';
      generatedView.classList.add('active');
      generatedView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    showToast('PRD generated successfully!');
  });

  function renderFormattedPrd(data) {
    const previewContainer = document.getElementById('formattedPrdContainer');
    if (!previewContainer) return;

    previewContainer.innerHTML = `
      <div class="formatted-prd-doc">
        <!-- PRD Header -->
        <div class="prd-header-banner">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <span class="badge" style="background-color: var(--primary-subtle); color: var(--primary); border: 1px solid var(--primary-light);">
              ✦ Product Requirements Document
            </span>
            <span class="badge" style="background-color: #ecfdf5; color: #059669; border: 1px solid #a7f3d0;">
              ● Status: Ready for Review (v1.0)
            </span>
          </div>

          <h2 class="prd-header-title">${escapeHtml(data.productName)}</h2>

          <div class="prd-meta-grid">
            <div class="prd-meta-cell">
              <strong>Target Release</strong>
              <span>📅 ${escapeHtml(data.releaseDate)}</span>
            </div>
            <div class="prd-meta-cell">
              <strong>Created Date</strong>
              <span>🕒 ${escapeHtml(data.createdDate)}</span>
            </div>
            <div class="prd-meta-cell">
              <strong>Owner</strong>
              <span>👤 Product Lead</span>
            </div>
            <div class="prd-meta-cell">
              <strong>Review Status</strong>
              <span>✓ Stakeholder Alignment</span>
            </div>
          </div>
        </div>

        <!-- 1. Problem Statement -->
        <div class="prd-section-block">
          <h3 class="prd-sec-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--danger);">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            1. Problem Statement & Background
          </h3>
          <div class="prd-sec-content">${formatParagraphs(data.problemStatement)}</div>
        </div>

        <!-- 2. Target Users -->
        <div class="prd-section-block">
          <h3 class="prd-sec-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent);">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            2. Target Users & Beneficiaries
          </h3>
          <div class="prd-sec-content">${formatParagraphs(data.targetUsers)}</div>
        </div>

        <!-- 3. Goals & Outcomes -->
        <div class="prd-section-block">
          <h3 class="prd-sec-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            3. Business Goals & Objectives
          </h3>
          <div class="prd-sec-content">${formatParagraphs(data.goals)}</div>
        </div>

        <!-- 4. Key Features & Requirements -->
        <div class="prd-section-block">
          <h3 class="prd-sec-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--success);">
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            4. Key Functional Features
          </h3>
          <div class="prd-sec-content">${formatParagraphs(data.keyFeatures)}</div>
        </div>

        <!-- 5. Success Metrics -->
        <div class="prd-section-block">
          <h3 class="prd-sec-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--info);">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            5. Success Metrics & Telemetry
          </h3>
          <div class="prd-sec-content">${formatParagraphs(data.successMetrics)}</div>
        </div>

        <!-- 6. Scope Boundaries -->
        <div class="prd-section-block">
          <h3 class="prd-sec-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #8b5cf6;">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            6. Scope Boundaries (In-Scope vs. Out-of-Scope)
          </h3>
          <div class="prd-scope-comparison">
            <div class="scope-box in-scope">
              <div class="scope-box-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                In-Scope for Initial Release (v1.0)
              </div>
              <div class="prd-sec-content">${formatParagraphs(data.inScope)}</div>
            </div>

            <div class="scope-box out-scope">
              <div class="scope-box-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Out-of-Scope (Deferred to Future Milestones)
              </div>
              <div class="prd-sec-content">${formatParagraphs(data.outScope)}</div>
            </div>
          </div>
        </div>

        <!-- 7. Release Schedule & Signoff -->
        <div class="prd-section-block" style="margin-bottom: 0;">
          <h3 class="prd-sec-heading">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--warning);">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            7. Target Release Schedule
          </h3>
          <p style="font-size: 0.9375rem; color: var(--text-muted); line-height: 1.6;">
            Target General Availability (GA) Date: <strong>${escapeHtml(data.releaseDate)}</strong>. Development will proceed following cross-functional technical and UX design approval.
          </p>
        </div>
      </div>
    `;

    // Construct Markdown Representation for export
    currentGeneratedMarkdown = `# ${data.productName} — Product Requirements Document (PRD)

**Status:** Ready for Review (v1.0)  
**Target Release Date:** ${data.releaseDate}  
**Date Created:** ${data.createdDate}  
**Author:** Product Lead  

---

## 1. Problem Statement
${data.problemStatement}

---

## 2. Target Users
${data.targetUsers}

---

## 3. Goals & Objectives
${data.goals}

---

## 4. Key Features & Requirements
${data.keyFeatures}

---

## 5. Success Metrics
${data.successMetrics}

---

## 6. Scope Boundaries

### In-Scope (v1.0)
${data.inScope}

### Out-of-Scope
${data.outScope}

---

## 7. Release Schedule
Target GA release date is **${data.releaseDate}**.
`;
  }

  // Edit Inputs button
  editInputsBtn?.addEventListener('click', () => {
    if (formView && generatedView) {
      generatedView.classList.remove('active');
      formView.style.display = 'flex';
      formView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Copy Generated PRD as Markdown
  copyGeneratedMdBtn?.addEventListener('click', async () => {
    if (!currentGeneratedMarkdown) return;
    try {
      await navigator.clipboard.writeText(currentGeneratedMarkdown);
      showToast('Generated PRD copied as Markdown!');
    } catch (err) {
      fallbackCopyText(currentGeneratedMarkdown);
      showToast('Generated PRD copied to clipboard!');
    }
  });

  // Download Generated PRD as Markdown File
  downloadGeneratedMdBtn?.addEventListener('click', () => {
    if (!currentGeneratedMarkdown) return;
    const filename = `${(inputProductName?.value.trim() || 'product-prd').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
    downloadFile(filename, currentGeneratedMarkdown, 'text/markdown');
    showToast(`Downloaded ${filename}`);
  });

  // Print / Export PDF trigger
  printPrdBtn?.addEventListener('click', () => {
    window.print();
  });

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatParagraphs(text) {
    if (!text) return '';
    // Format lines with bullets or line breaks
    const escaped = escapeHtml(text);
    return escaped
      .split('\n')
      .map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
          return `<div style="margin-bottom: 4px; padding-left: 12px; position: relative;">${trimmed}</div>`;
        }
        if (/^\d+\./.test(trimmed)) {
          return `<div style="margin-bottom: 4px; padding-left: 12px; font-weight: 500;">${trimmed}</div>`;
        }
        return trimmed ? `<p style="margin-bottom: 8px;">${trimmed}</p>` : '<div style="height: 6px;"></div>';
      })
      .join('');
  }
});
