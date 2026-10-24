import React, { useState } from 'react'

const CATEGORIES = [
  'Cinematic',
  'Nature',
  'Moody',
  'Street',
  'Minimal',
  'Coastal'
]

const SAMPLE_PRESETS = [
  {
    label: '🌄 Golden Mountain',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    category: 'Cinematic',
    title: 'Sunrise Over Peaks',
    location: 'Spiti Valley, Himachal'
  },
  {
    label: '🌊 Turquoise Coast',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    category: 'Coastal',
    title: 'Emerald Wave Shore',
    location: 'Gokarna, Karnataka'
  },
  {
    label: '🏙️ Neon Cityscape',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    category: 'Street',
    title: 'Neon Reflection Lane',
    location: 'Cyber Hub, Gurugram'
  }
]

const AddPhotoModal = ({ isOpen, onClose, onAddPhoto }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    location: '',
    category: 'Cinematic',
    url: ''
  })
  const [formError, setFormError] = useState('')
  const [previewError, setPreviewError] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFormError('')
    if (name === 'url') setPreviewError(false)
  }

  const handleApplyPreset = (preset) => {
    setFormData((prev) => ({
      ...prev,
      title: prev.title || preset.title,
      location: prev.location || preset.location,
      category: preset.category,
      url: preset.url
    }))
    setPreviewError(false)
    setFormError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.author.trim()) {
      setFormError("Please enter the photographer's name.")
      return
    }

    if (!formData.url.trim()) {
      setFormError('Please enter a valid photo URL.')
      return
    }

    const newPhoto = {
      id: `user-${Date.now()}`,
      title: formData.title.trim() || 'Untitled Frame',
      author: formData.author.trim(),
      location: formData.location.trim() || 'India',
      category: formData.category,
      preview_url: formData.url.trim(),
      download_url: formData.url.trim(),
      url: formData.url.trim()
    }

    onAddPhoto(newPhoto)
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h2 className="modal-heading">Add Your Photograph</h2>
              <p className="modal-subheading">
                Showcase your capture in the FrameLab aesthetic gallery
              </p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="modal-form">
          {formError && <div className="modal-error-alert">{formError}</div>}

          {/* Quick presets pills */}
          <div className="presets-container">
            <span className="presets-label">Quick samples:</span>
            {SAMPLE_PRESETS.map((p, idx) => (
              <button
                key={idx}
                type="button"
                className="preset-btn"
                onClick={() => handleApplyPreset(p)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="form-grid">
            {/* Photographer Name */}
            <div className="form-group">
              <label htmlFor="author" className="form-label">
                Photographer Name <span className="required-star">*</span>
              </label>
              <input
                id="author"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="e.g. Aarav Sharma, Diya Sen"
                className="form-input"
                required
              />
            </div>

            {/* Photo Title */}
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Photo Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Sunlit Forest Canopy"
                className="form-input"
              />
            </div>

            {/* Location */}
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Munnar, Kerala"
                className="form-input"
              />
            </div>

            {/* Category / Type */}
            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Type of Photo (Category)
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Photo URL */}
          <div className="form-group">
            <label htmlFor="url" className="form-label">
              Photo URL <span className="required-star">*</span>
            </label>
            <input
              id="url"
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/... or direct image link"
              className="form-input"
              required
            />
            <span className="input-helper-text">
              Direct high-resolution image link (.jpg, .png, Unsplash, or web image URL)
            </span>
          </div>

          {/* Live Preview Area */}
          {formData.url.trim() && (
            <div className="live-preview-box">
              <span className="live-preview-title">Live Card Preview:</span>
              <div className="preview-card-wrap">
                <div className="preview-card-img-wrap">
                  <img
                    src={formData.url}
                    alt="Preview"
                    className="preview-card-img"
                    onError={() => setPreviewError(true)}
                  />
                  <div className="preview-card-overlay">
                    <span className="preview-category-badge">{formData.category}</span>
                    <h4 className="preview-card-title">
                      {formData.title || 'Untitled Frame'}
                    </h4>
                    <p className="preview-card-author">
                      By {formData.author || 'Photographer'} • {formData.location || 'Location'}
                    </p>
                  </div>
                </div>
                {previewError && (
                  <p className="preview-warning-text">
                    ⚠️ Preview failed to load image from this URL. Make sure it is a direct accessible image link.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="modal-actions">
            <button
              type="button"
              className="modal-btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="modal-btn-submit">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Add Photograph</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPhotoModal
