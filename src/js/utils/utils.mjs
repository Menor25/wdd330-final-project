// retrieve data from localStorage
export function getLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return Array.isArray(data) ? data : [];
}

// save data to localStorage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function updateCartCount() {
  const cartItems = getLocalStorage('so-cart');
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    if (cartItems && cartItems.length > 0) {
      const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
      cartCountElement.textContent = totalQuantity;
      cartCountElement.classList.remove('hide');
    } else {
      cartCountElement.classList.add('hide');
    }
  }
}

// render single template
export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback,
) {
  parentElement.innerHTML = template;

  if (callback) {
    callback(data);
  }
}

// load template file
export async function loadTemplate(path) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(`Failed to load template at ${path}`);
  }

  const template = await res.text();

  return template;
}

// load dynamic header and footer
export async function loadHeaderFooter() {
  try {
    const headerTemplate = await loadTemplate('./partials/header.html');
    const footerTemplate = await loadTemplate('./partials/footer.html');

    const headerElement = document.querySelector('#main-header');
    const footerElement = document.querySelector('#main-footer');

    if (headerElement) {
      renderWithTemplate(headerTemplate, headerElement);
      updateCartCount();
    }

    if (footerElement) {
      renderWithTemplate(footerTemplate, footerElement);
    }
  } catch (error) {
    console.error('Error loading templates:', error);
  }
}

export function uiEffects() {
    // Use event delegation to handle buttons dynamically
    document.addEventListener('mouseover', (e) => {
        const button = e.target.closest('button');
        if (button) {
            button.style.transform = 'scale(0.98)';
        }
    });
    document.addEventListener('mouseout', (e) => {
        const button = e.target.closest('button');
        if (button) {
            button.style.transform = 'scale(1)';
        }
    });
}