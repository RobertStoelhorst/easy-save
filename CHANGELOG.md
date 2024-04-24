<!-- @format -->

# Changelog

All notable changes to this project from version 2.0.0^ will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

### Version 2.0.0 [easy-save-local-storage-and-performance-uplift](https://github.com/RobertStoelhorst/porfolio-website-v2/pull/41) - 23-04-2024

---

## EASY SAVE Project

---

### Added

-   Added two new features:
    -   Added logic required to support the 'Autosave' feature, users will now be able to cach form data in the browsers local storage.
    -   Added [publish.yml](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/5fc05e65a6f33d408eb3fa1e5796bc5f8bc22804/.github/workflows/publish.yml) file with Github Actions config for automated deployment of application to my site hosting providor and configured a notify_discord job to send a webhook message to a production channel on my discord.
-   Developed/Improved [Summary ](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/Summary.js)Component :
    -   Added new dynamic summary contextual text section below the existing Summary describing budget status.
-   Added [categories.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/easy-save-local-storage-and-performance-uplift/src/components/Projects/EasySave/categories.js) file with component content configuration to be used to dynamically generate the accordion components.
-   Added [CategoryAccordion.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/easy-save-local-storage-and-performance-uplift/src/components/Projects/EasySave/components/CategoryAccordion/CategoryAccordion.js) component which is rendered by the new BudgetCategoryAccordions component.
-   Added [BudgetCategoryAccordions.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/easy-save-local-storage-and-performance-uplift/src/components/Projects/EasySave/components/BudgetCategoryAccordions/BudgetCategoryAccordions.js) component to manage and render the CategoryAccordion component.

### Changed

-   Refactored all application project and related components code, decreased project build size and improved performance by writing new functions and lifting state up into one parent functional component.

### Removed

All code logic from removed files was refactored, optimised and incorporated in [EasySave.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/EasySave.js)

-   [App.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/ebaed57c4b89fc3f7f4308a6238981813cf449a7/src/components/Projects/EasySave/App.js).
-   [Income.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/ebaed57c4b89fc3f7f4308a6238981813cf449a7/src/components/Projects/EasySave/Income.js).
-   [Homeutils.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/ebaed57c4b89fc3f7f4308a6238981813cf449a7/src/components/Projects/EasySave/Homeutils.js).
-   [Insurance.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/Insurance.js).
-   [Groceries.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/Groceries.js).
-   [Personal.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/Personal.js).
-   [Entertainment.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/Entertainment.js).
-   [Transport.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/Transport.js).
-   [Children.js](https://github.com/RobertStoelhorst/porfolio-website-v2/blob/7a53f19d3df6548c100a15e658ff7d4706cb7ed2/src/components/Projects/EasySave/Children.js).
-   [ChevronArrow.js](https://github.com/RobertStoelhorst/porfolio-website-v2)
-   [ChevronCircle.js](https://github.com/RobertStoelhorst/porfolio-website-v2)

---
