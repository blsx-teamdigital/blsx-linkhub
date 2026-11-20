import useThemeMode from '../hooks/useThemeMode'

export default function ThemeModeSwitch() {
  const { theme, toggleTheme } = useThemeMode()
  const nextMode = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      className="theme-mode-switch"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextMode} mode`}
    >
      <i className={`bi ${theme === 'light' ? 'bi-sun' : 'bi-moon-stars'}`} aria-hidden="true" />
    </button>
  )
}