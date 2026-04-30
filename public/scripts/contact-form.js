(function () {
  const endpoint =
    'https://defaultb5687cc343ce40ed91fd6a67198489.81.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/67f7bf7e639044d8a78de32f1691dfa1/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=U8kmHBuwfedGCM7VufLr_6FtbDcgLhgwSTbeE26hdQs';

  const forms = document.querySelectorAll('[data-contact-form]');

  if (!forms.length) {
    return;
  }

  const setStatus = (form, message, state) => {
    const status = form.querySelector('[data-contact-status]');

    if (!status) {
      return;
    }

    status.textContent = message;
    status.dataset.state = state;
  };

  const getValue = (formData, key) => String(formData.get(key) || '').trim();

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const formData = new FormData(form);
      const honeypot = getValue(formData, 'company');

      if (honeypot) {
        form.reset();
        setStatus(form, 'Thanks, your message has been sent.', 'success');
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : '';
      const payload = {
        firstName: getValue(formData, 'firstName'),
        lastName: getValue(formData, 'lastName'),
        email: getValue(formData, 'email'),
        message: getValue(formData, 'message'),
        sourcePage: window.location.href,
        formSource: form.dataset.formSource || 'Website',
        siteName: 'collabor8 Architecture + Design (BC)',
        submittedAt: new Date().toISOString(),
      };

      setStatus(form, 'Sending...', 'pending');

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending';
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Power Automate returned ${response.status}`);
        }

        form.reset();
        setStatus(form, 'Thanks, your message has been sent.', 'success');
      } catch (error) {
        console.error('Contact form submission failed:', error);
        setStatus(
          form,
          'Sorry, something went wrong. Please email info@c8bc.ca directly.',
          'error',
        );
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText || 'Submit';
        }
      }
    });
  });
})();
