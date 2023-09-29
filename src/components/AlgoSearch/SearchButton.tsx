import styles from "./searchButton.module.css"

export const SearchButton = ({ onClickHandler }: { onClickHandler: () => void }) => {
  return (
    <button className={styles.container} onClick={onClickHandler}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_2169_5273)">
          <path
            d="M15.5868 13.7308L12.4971 10.6744C13.3418 9.40871 13.7393 7.89708 13.6265 6.37961C13.5138 4.86215 12.8972 3.42588 11.8747 2.29897C10.8522 1.17205 9.48247 0.41913 7.98309 0.1598C6.4837 -0.0995291 4.94065 0.14961 3.59907 0.86764C2.25749 1.58567 1.19431 2.73141 0.578438 4.12285C-0.037437 5.51429 -0.17069 7.07163 0.199847 8.54748C0.570385 10.0233 1.42346 11.333 2.62356 12.2685C3.82366 13.204 5.30195 13.7117 6.8236 13.7109C8.17403 13.7122 9.49385 13.3086 10.6126 12.5522L13.709 15.6486C13.9585 15.8967 14.2961 16.0359 14.6479 16.0359C14.9997 16.0359 15.3373 15.8967 15.5868 15.6486C15.7157 15.5244 15.8182 15.3754 15.8883 15.2107C15.9583 15.0459 15.9944 14.8688 15.9944 14.6897C15.9944 14.5107 15.9583 14.3335 15.8883 14.1688C15.8182 14.004 15.7157 13.8551 15.5868 13.7308ZM6.8236 2.01769C7.77816 2.01769 8.71129 2.30066 9.50507 2.83085C10.2988 3.36104 10.9176 4.11464 11.2832 4.99641C11.6488 5.87818 11.7448 6.84854 11.5591 7.78485C11.3733 8.72117 10.9142 9.5814 10.2397 10.2568C9.56518 10.9323 8.70558 11.3926 7.76952 11.5796C6.83347 11.7667 5.86298 11.672 4.9807 11.3076C4.09843 10.9432 3.34398 10.3255 2.81269 9.53245C2.28141 8.73941 1.99715 7.80667 1.99583 6.85211C1.99583 5.57109 2.50426 4.34245 3.40945 3.43601C4.31464 2.52957 5.54258 2.01945 6.8236 2.01769Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_5273">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className={styles.text}>Search Chainlink Docs</span>
      <div className={styles.shortcut}>⌘K</div>
    </button>
  )
}
