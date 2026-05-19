// Copy to clipboard using the native Clipboard API (replaces the old Flash-based ZeroClipboard)
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(function() {
      console.log('Copied to clipboard:', text);
    }).catch(function(err) {
      console.error('Clipboard write failed:', err);
    });
  }
  // Fallback for older browsers
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand('copy'); } catch(e) { console.error('Fallback copy failed:', e); }
  document.body.removeChild(ta);
}

// Attach to any element with data-copy attribute
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-copy]').forEach(function(el) {
    el.addEventListener('click', function() {
      copyToClipboard(el.getAttribute('data-copy'));
    });
  });
});
