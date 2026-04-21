(function () {
  var projectModal = document.getElementById('project-modal');

  window.workProjectModalState = {
    gallery: [],
    title: '',
    category: '',
    location: '',
    position: 'center',
    fit: 'contain',
    captionOpacity: '0.5',
    activeImageIndex: 0
  };

  window.renderProjectModal = function renderProjectModal() {
    var modalImage = document.querySelector('.project-modal__image');
    var modalTitle = document.getElementById('project-modal-title');
    var modalCategory = document.getElementById('project-modal-category');
    var modalMeta = document.getElementById('project-modal-meta');
    var modalCounter = document.getElementById('project-modal-counter');
    var modalCaption = document.querySelector('.project-modal__caption');
    var state = window.workProjectModalState;
    var image;

    if (!modalImage || !modalTitle || !modalCategory || !modalMeta || !modalCounter || !modalCaption) {
      return false;
    }

    if (!state.gallery.length || !state.gallery[state.activeImageIndex]) {
      return false;
    }

    image = state.gallery[state.activeImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalImage.style.objectPosition = 'center';
    modalImage.style.objectFit = 'contain';
    modalCaption.style.setProperty('--project-modal-caption-opacity', image.captionOpacity || '0.5');
    modalTitle.textContent = state.title;
    modalCategory.textContent = state.category;
    modalMeta.textContent = 'Location ' + state.location;
    modalCounter.textContent = state.activeImageIndex + 1 + ' / ' + state.gallery.length;

    return true;
  };

  window.openProjectModalFromButton = function openProjectModalFromButton(buttonEl) {
    var article;
    var dataBlock;
    var galleryNodes;
    var state;
    var i;

    if (!buttonEl || !projectModal) {
      return false;
    }

    article = buttonEl.parentNode;
    if (!article) {
      return false;
    }

    dataBlock = article.querySelector('.work-project__gallery-data');
    if (!dataBlock) {
      return false;
    }

    state = window.workProjectModalState;
    state.title = '';
    state.category = '';
    state.location = '';
    state.position = 'center';
    state.fit = 'contain';
    state.captionOpacity = '0.5';
    state.gallery = [];
    state.activeImageIndex = 0;

    if (dataBlock.querySelector('[data-project-name]')) {
      state.title = dataBlock.querySelector('[data-project-name]').getAttribute('data-project-name') || '';
    }

    if (dataBlock.querySelector('[data-project-category]')) {
      state.category = dataBlock.querySelector('[data-project-category]').getAttribute('data-project-category') || '';
    }

    if (dataBlock.querySelector('[data-project-location]')) {
      state.location = dataBlock.querySelector('[data-project-location]').getAttribute('data-project-location') || '';
    }

    galleryNodes = dataBlock.querySelectorAll('[data-gallery-src]');
    for (i = 0; i < galleryNodes.length; i += 1) {
      state.gallery.push({
        src: galleryNodes[i].getAttribute('data-gallery-src') || '',
        alt: galleryNodes[i].getAttribute('data-gallery-alt') || '',
        position: galleryNodes[i].getAttribute('data-gallery-position') || '50% 62%',
        fit: galleryNodes[i].getAttribute('data-gallery-fit') || 'cover',
        captionOpacity: galleryNodes[i].getAttribute('data-gallery-caption-opacity') || '0.5'
      });
    }

    if (!state.gallery.length) {
      return false;
    }

    window.renderProjectModal();
    projectModal.hidden = false;
    document.body.classList.add('project-modal-open');

    return false;
  };

  window.closeProjectModal = function closeProjectModal() {
    if (!projectModal) {
      return false;
    }

    projectModal.hidden = true;
    document.body.classList.remove('project-modal-open');
    return false;
  };

  window.prevProjectModalImage = function prevProjectModalImage() {
    var state = window.workProjectModalState;

    if (!state.gallery.length) {
      return false;
    }

    state.activeImageIndex =
      (state.activeImageIndex - 1 + state.gallery.length) % state.gallery.length;
    window.renderProjectModal();

    return false;
  };

  window.nextProjectModalImage = function nextProjectModalImage() {
    var state = window.workProjectModalState;

    if (!state.gallery.length) {
      return false;
    }

    state.activeImageIndex =
      (state.activeImageIndex + 1) % state.gallery.length;
    window.renderProjectModal();

    return false;
  };

  window.filterWorkProjectsByCategory = function filterWorkProjectsByCategory(selectedCategory, buttonEl) {
    var filterButtons = document.querySelectorAll('[data-category-filter]');
    var projectCards = document.querySelectorAll('.work-project');
    var i;
    var matches;

    for (i = 0; i < filterButtons.length; i += 1) {
      filterButtons[i].classList.remove('is-active');
    }

    if (buttonEl) {
      buttonEl.classList.add('is-active');
    }

    for (i = 0; i < projectCards.length; i += 1) {
      matches =
        selectedCategory === 'all' ||
        projectCards[i].getAttribute('data-category') === selectedCategory;

      if (matches) {
        projectCards[i].classList.remove('is-hidden');
      } else {
        projectCards[i].classList.add('is-hidden');
      }
    }

    return false;
  };

  if (projectModal) {
    projectModal.addEventListener('click', function (event) {
      if (event.target === event.currentTarget) {
        window.closeProjectModal();
      }
    });
  }

  window.addEventListener('keydown', function (event) {
    if (!projectModal || projectModal.hidden) {
      return;
    }

    if (event.key === 'Escape') {
      window.closeProjectModal();
    }

    if (event.key === 'ArrowLeft') {
      window.prevProjectModalImage();
    }

    if (event.key === 'ArrowRight') {
      window.nextProjectModalImage();
    }
  });
})();
