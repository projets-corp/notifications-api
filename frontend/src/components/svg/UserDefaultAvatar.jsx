const UserDefaultAvatar = ({ variant }) => {
    if (variant === 1)
        return (
            <svg
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
            >
                <g
                    id="SVGRepo_bgCarrier"
                    strokeWidth="0"
                ></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M903.168 413.696c15.36 0 15.36 23.552 0 23.552h-42.496c0.512 28.672 0.512 57.344 0.512 86.016 12.8 0.512 25.6 1.024 38.4 0.512 15.36-0.512 15.36 23.04 0 23.552-12.8 0.512-25.6 0.512-38.4-0.512 0 22.016 0 44.032 0.512 66.048 0 40.448 10.24 108.544-46.08 112.64-65.536 5.12-133.12 1.024-199.168 1.024 0 29.184 0 57.856-0.512 87.04h34.816c15.36 0 15.36 23.552 0 23.552h-34.816c-0.512 41.472-1.536 82.432-2.56 123.904 0 6.656-5.12 11.776-11.776 11.776-57.344 1.024-114.688 0.512-172.032-1.536-14.336-0.512-32.256 2.048-38.4-13.824-7.168-18.432-1.024-48.128-1.024-67.584v-138.24c-13.824-1.024-27.648-2.048-41.984-2.048-15.36 0-15.36-23.552 0-23.552 13.824 0 27.648 0.512 41.984 2.048V654.848c-13.312-1.024-26.112-1.536-39.424-1.024-15.36 0.512-15.36-23.552 0-23.552 13.312-0.512 26.112 0 39.424 1.024V558.08h-114.688c-29.184 0-61.952-0.512-85.504-19.968-19.968-16.896-27.136-41.984-28.672-67.584-2.048-23.552-1.024-47.104-0.512-71.168-11.264-1.024-22.528-1.024-33.792-1.024-15.36 0.512-15.36-23.04 0-23.552 11.776-0.512 23.04 0 34.816 1.024 0-5.12 0-9.728 0.512-14.848 0-17.408 0.512-34.816 0.512-52.224H122.368c-15.36 0-15.36-23.552 0-23.552H162.816c0-15.36 0.512-30.72 0.512-46.592 0.512-27.136 5.632-52.736 27.136-71.68 21.504-18.432 49.664-24.576 77.312-22.528 24.576 2.048 55.296 6.656 68.608 29.696 15.36 26.112 9.216 65.536 9.216 94.208l1.536 103.424c13.824 0 27.136 0 40.96-0.512 4.096 0 20.992 2.048 25.088 0.512-1.024-1.024 0-12.288 0-13.824v-96.256-101.376c0-27.136-3.072-56.32 12.288-80.384 30.72-46.592 76.288-55.808 128-46.592 46.592 8.704 81.408 57.344 89.6 102.4v3.584c0.512 1.024 0.512 2.56 0.512 4.096 0.512 80.896 0.512 161.792 0 242.176V506.88c0 9.216-6.144 46.592 2.048 53.76 6.144 5.632 35.84 2.048 44.032 0.512 20.992-3.584 16.384-29.184 17.408-47.104 1.024-17.92 1.536-36.352 1.536-54.272 0-33.28-1.536-66.56-2.56-99.84-1.024-32.256-0.512-64.512 0.512-96.768 0.512-24.064-1.536-48.64 1.536-72.192 5.632-41.472 46.592-69.632 87.04-61.44 21.504 4.096 44.032 15.872 53.76 36.864 7.168 15.36 6.656 35.328 7.68 52.224 0 4.096 0.512 8.192 0.512 12.288h44.032c15.36 0 15.36 23.552 0 23.552h-43.52c1.024 20.992 1.536 41.984 2.048 62.976h30.72c15.36 0 15.36 23.552 0 23.552H860.16l1.536 71.168c12.8 1.536 27.136 1.536 41.472 1.536z m-70.144 276.48c6.656-12.8 4.608-30.72 4.608-44.544V590.848c0-35.328-0.512-70.656-1.024-105.472-0.512-62.464-2.048-125.44-3.584-187.904-0.512-27.648-1.024-54.784-2.56-82.432-1.536-25.6-3.584-46.592-30.72-56.832-28.16-10.752-61.44 1.536-69.632 32.768-6.144 23.04-1.536 50.688-2.048 74.752-1.536 62.464 2.048 124.928 2.56 187.392 0.512 33.28-0.512 66.56-5.12 99.328-2.048 17.408-5.12 30.72-24.576 34.304-16.384 2.56-47.616 5.632-63.488 0-19.456-6.656-19.456-23.552-19.456-40.96-0.512-133.632 0.512-267.264-0.512-400.896v-1.024c-4.608-26.112-20.48-52.736-39.424-71.168-18.432-18.432-60.416-22.528-84.992-16.896-27.648 6.656-54.784 34.816-57.856 62.976-3.072 27.648-0.512 56.832-0.512 84.48v87.552c0 27.648 4.096 58.368 0 85.504-2.048 12.8-7.68 18.944-20.48 20.48-26.112 3.072-54.784 0.512-80.896 0-7.68 0-11.264-6.144-11.264-11.776 0-1.024-0.512-2.048-0.512-3.072l-1.536-112.128c0-16.896 0-33.792-0.512-51.2-0.512-22.016-5.632-38.4-28.16-45.056-32.768-9.216-79.872-7.68-98.816 26.112-9.216 16.896-7.168 38.4-7.68 56.832 0 18.432-0.512 36.352-0.512 54.784l-1.536 114.176c-0.512 29.184-5.12 69.12 17.408 91.648 22.528 22.528 61.952 17.408 91.136 17.92h104.96c1.024 0 2.56 0 3.584 0.512 6.144 0 12.288 3.584 12.288 11.264v380.416c0 5.632-1.024 12.8 0 18.432v2.048c0.512 0 1.024 0 2.048 0.512 10.752 2.56 25.088 1.024 36.352 1.024 46.08 1.536 91.648 1.536 137.728 1.024 2.048-78.336 3.072-156.672 2.56-235.008 0-6.656 5.632-11.776 11.776-11.776 38.4 0 77.312-0.512 115.712-0.512h55.808c18.432-0.512 49.152 5.12 58.88-12.8z"
                        fill="#056137"
                    ></path>
                    <path
                        d="M837.632 645.632c0 13.824 2.048 31.744-4.608 44.544-9.728 17.92-40.448 12.288-57.856 12.288h-55.808c-38.4 0-77.312 0-115.712 0.512-6.144 0-11.776 5.632-11.776 11.776 0.512 78.336-0.512 156.672-2.56 235.008-46.08 0.512-91.648 0.512-137.728-1.024-11.264-0.512-25.088 1.536-36.352-1.024-1.024 0-1.536-0.512-2.048-0.512v-2.048c-1.024-5.632 0-12.288 0-18.432V848.896 546.304c0-7.68-6.144-11.776-12.288-11.264-1.024-0.512-2.048-0.512-3.584-0.512h-104.96c-29.184 0-68.608 5.12-91.136-17.92S183.296 454.144 183.808 424.96l1.536-114.176c0-18.432 0.512-36.352 0.512-54.784 0-18.432-1.536-39.936 7.68-56.832 18.432-34.304 65.536-35.328 98.816-26.112 22.528 6.144 27.648 23.04 28.16 45.056 0.512 16.896 0.512 33.792 0.512 51.2l1.536 112.128c0 1.024 0 2.048 0.512 3.072 0 5.632 4.096 11.776 11.264 11.776 26.112 0.512 54.784 3.072 80.896 0 12.8-1.536 18.432-7.68 20.48-20.48 4.096-27.136 0-57.856 0-85.504v-87.552c0-27.648-2.56-56.832 0.512-84.48 3.072-28.16 30.208-56.32 57.856-62.976 24.064-5.632 66.56-1.536 84.992 16.896 18.944 18.432 34.816 45.056 39.424 71.168v1.024c1.024 133.632-0.512 267.264 0.512 400.896 0 17.408 0 33.792 19.456 40.96 15.872 5.632 47.104 2.56 63.488 0 19.456-3.584 22.016-16.896 24.576-34.304 4.096-32.768 5.12-66.048 5.12-99.328-0.512-62.464-4.096-124.928-2.56-187.392 0.512-23.552-4.096-51.2 2.048-74.752 8.192-31.232 40.96-43.52 69.632-32.768 27.136 10.24 29.184 31.232 30.72 56.832 1.536 27.648 2.048 54.784 2.56 82.432 1.536 62.464 2.56 125.44 3.584 187.904 0.512 35.328 0.512 70.656 1.024 105.472-1.024 18.432-1.024 36.864-1.024 55.296zM764.928 448.512c0.512 15.36 24.064 15.36 23.552 0-2.56-77.312-3.072-155.136-1.536-232.448 0.512-15.36-23.552-15.36-23.552 0-1.536 77.312-1.024 154.624 1.536 232.448z m-246.272-325.12c0-15.36-23.552-15.36-23.552 0l-3.072 246.784c0 15.36 23.552 15.36 23.552 0l3.072-246.784z m-288.768 251.392c0.512 15.36 24.064 15.36 23.552 0-1.536-43.52-2.048-87.04-1.024-130.56 0.512-15.36-23.552-15.36-23.552 0-0.512 43.52-0.512 87.04 1.024 130.56z"
                        fill="#3B9548"
                    ></path>
                    <path
                        d="M788.48 448.512c0.512 15.36-23.04 15.36-23.552 0-2.56-77.312-3.072-155.136-1.536-232.448 0.512-15.36 24.064-15.36 23.552 0-1.536 77.312-1.024 154.624 1.536 232.448zM495.104 123.392c0-15.36 24.064-15.36 23.552 0l-3.072 246.784c0 15.36-24.064 15.36-23.552 0l3.072-246.784zM253.952 374.784c0.512 15.36-23.04 15.36-23.552 0-1.536-43.52-2.048-87.04-1.024-130.56 0.512-15.36 24.064-15.36 23.552 0-1.024 43.52-0.512 87.04 1.024 130.56z"
                        fill="#056137"
                    ></path>
                </g>
            </svg>
        );
    if (variant === 2)
        return (
            <svg
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
            >
                <g
                    id="SVGRepo_bgCarrier"
                    strokeWidth="0"
                ></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M841.728 574.464c-32.256-1.536-101.376-3.584-173.056 5.12-57.856 7.168-105.472 19.456-142.336 36.864-7.68 3.584-14.336 7.168-20.992 11.264 24.064-40.96 81.408-119.296 165.888-119.296h3.584c87.552 2.56 143.872 44.544 166.912 66.048z"
                        fill="#9CD5D6"
                    ></path>
                    <path
                        d="M498.688 650.24c93.184-70.144 292.864-64 347.136-60.928-24.064 28.16-96.256 102.4-179.2 107.52-83.456 4.608-146.432-32.256-167.936-46.592zM344.576 645.12c-43.008 4.096-118.272 0.512-172.032-60.928-62.976-71.168-41.472-168.448-29.184-206.336 12.288 25.088 38.4 76.8 75.776 131.072 30.72 45.056 73.728 97.792 125.44 136.192z"
                        fill="#9CD5D6"
                    ></path>
                    <path
                        d="M372.736 641.024c-2.048 0.512-4.608 1.024-7.68 1.536-110.08-75.264-187.392-225.28-209.92-271.872 39.424 12.8 143.872 51.2 175.616 116.736 33.28 68.608 40.448 134.144 41.984 153.6zM556.032 122.368c41.984-17.408 80.896-24.064 103.936-26.624-25.6 23.04-76.8 72.192-125.44 137.728C476.16 312.32 411.136 429.568 416.256 556.544c-73.728-96.768-40.448-236.544-38.912-243.2 30.208-89.6 90.624-154.112 178.688-190.976z"
                        fill="#9CD5D6"
                    ></path>
                    <path
                        d="M865.28 578.56l3.584 4.608-3.584 4.608c-3.584 4.608-90.112 117.248-198.656 123.904-5.632 0.512-10.752 0.512-16.384 0.512-84.48 0-145.408-38.912-163.84-51.712-15.36 14.336-27.136 31.232-32.768 51.712 32.768 163.84 70.144 224.768 70.656 225.28l-12.288 7.68c-2.048-3.072-42.496-69.12-76.8-251.392-26.112-7.68-50.688-19.968-73.728-34.816-10.752 1.536-25.6 3.072-42.496 3.072-5.12 0-9.728 0-15.36-0.512-57.856-3.584-107.52-26.624-142.848-66.56-35.328-40.448-51.2-94.208-45.568-156.16 4.096-46.08 18.944-80.384 19.456-81.408l2.56-5.632 6.144 1.536c6.656 1.536 158.208 42.496 199.68 128.512 40.96 84.992 43.52 161.792 43.52 165.376v5.632l-5.12 1.536c16.384 9.728 33.28 17.92 51.2 23.552-4.608-27.136-9.728-56.832-13.824-89.088-0.512-2.048-0.512-4.608-1.024-6.656-39.936-43.008-61.952-103.424-64-175.104-1.536-53.76 8.704-94.72 9.216-96.256v-0.512c39.424-117.76 123.904-173.568 187.392-200.192 68.608-28.672 127.488-29.184 130.048-29.184h6.144l1.024 6.144c20.48 141.824-17.408 263.68-19.456 269.312-26.112 96.768-90.624 154.112-140.288 184.832-42.496 26.112-80.384 38.4-95.744 42.496 0 1.024 0 2.048 0.512 3.072 5.12 36.352 10.24 69.12 15.872 99.328 7.168-13.824 17.408-26.624 30.208-37.888v-0.512c0.512-1.536 17.408-39.424 49.664-76.8 43.52-50.688 93.696-76.8 146.432-75.264 124.928 2.048 187.904 79.36 190.464 82.944z m-196.608 1.024c71.68-8.704 140.8-6.656 173.056-5.12-23.552-21.504-79.36-63.488-166.912-65.536h-3.584c-84.48 0-141.824 78.336-165.888 119.296 6.656-4.096 13.312-7.68 20.992-11.264 36.864-17.92 84.992-30.208 142.336-37.376z m176.64 9.728c-54.272-3.072-253.44-9.216-347.136 60.928 21.504 14.848 84.992 51.712 167.424 46.592 83.456-5.12 155.648-79.872 179.712-107.52z m-190.464-238.08c0.512-1.024 36.864-114.176 20.48-249.856-22.016 19.456-77.824 70.656-129.536 141.312-58.88 78.848-124.416 198.144-114.176 325.632 15.872-4.608 51.2-16.384 89.6-40.448C568.32 498.176 629.76 443.904 654.848 351.232z m5.12-255.488c-23.04 2.56-61.44 9.216-103.936 26.624-88.064 36.864-148.48 100.864-178.688 190.976-1.536 6.656-34.304 145.92 38.912 243.2-5.12-126.976 59.904-244.224 117.76-323.072 48.64-65.536 100.352-114.688 125.952-137.728zM365.056 642.56c3.072-0.512 5.632-1.024 7.68-1.536-1.536-19.456-8.704-84.992-41.984-153.6-31.232-65.024-136.192-103.936-175.616-116.736 22.528 46.592 99.84 196.608 209.92 271.872z m-193.024-57.856c54.272 61.44 129.536 65.024 172.032 60.928-51.712-38.912-94.72-91.136-125.44-136.192-37.376-54.272-64-105.984-75.776-131.072-11.776 37.888-33.792 134.656 29.184 206.336z"
                        fill="#479CB2"
                    ></path>
                    <path
                        d="M675.328 101.376c16.384 135.68-19.968 248.832-20.48 249.856v0.512C629.76 443.904 568.32 498.176 521.216 527.872c-38.4 24.064-74.24 35.84-89.6 40.448-10.24-127.488 55.808-246.784 114.176-325.632 52.224-70.656 107.52-121.856 129.536-141.312z"
                        fill="#9CD5D6"
                    ></path>
                </g>
            </svg>
        );
    return (
        <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M645.12 373.76c99.328-48.128 209.408-71.168 319.488-67.072C892.416 389.12 803.328 454.656 699.904 493.056c-0.512 0-1.024 0.512-1.536 1.024-0.512 0.512-1.024 0.512-1.536 1.024-3.584 3.584-4.608 9.216-1.024 13.312 1.024 1.536 2.56 3.072 4.608 3.584 100.352 58.88 184.32 149.504 245.248 248.32-108.032-14.336-210.944-55.808-300.032-118.784-7.68-5.632-14.848 3.072-13.312 10.24v2.048c4.608 109.056-16.896 217.6-63.488 315.904-46.592-99.84-68.096-209.92-62.464-320 0-2.56-0.512-5.12-2.048-6.144-1.536-5.12-7.68-9.216-13.824-6.144-96.768 52.736-204.288 81.408-314.368 82.944 69.632-88.576 160.256-158.208 263.68-202.752 9.728-4.096 3.584-16.896-5.12-17.408-102.4-44.544-193.024-113.664-262.144-201.728 110.08 1.536 217.6 29.696 314.368 82.944 6.144 3.584 11.776-0.512 13.824-6.144 1.536-1.536 2.56-3.584 2.048-6.144-5.632-110.592 15.872-220.16 62.464-320.512 46.592 98.816 68.096 206.848 63.488 315.904-0.512 6.144 4.096 9.216 8.704 9.216 1.536 1.024 4.608 1.024 7.68 0z m-50.688 201.728c44.032-8.704 54.272-62.976 51.712-100.864-4.096-55.808-57.856-60.928-103.424-57.856-0.512 0-1.024 0-1.536 0.512h-2.56c-45.568 10.24-47.616 59.904-42.496 98.304 6.656 47.616 53.76 68.608 98.304 59.904z" fill="#E96195"></path><path d="M814.08 458.24c45.568 11.264 92.672 23.552 130.048 53.248-41.472 19.968-82.432 40.96-122.88 63.488-1.024 0.512-1.536 1.024-2.048 1.536-29.696-27.136-61.44-51.712-95.232-72.704 31.232-12.8 61.44-28.16 90.112-45.568zM740.864 719.36c13.824 44.544 27.648 90.112 22.016 136.704-38.4-25.088-77.824-48.64-117.76-71.68-0.512-0.512-1.024-0.512-1.536-0.512 5.632-38.4 8.192-76.8 7.168-115.712 28.672 19.456 58.88 36.352 90.112 51.2zM757.76 308.736c0 1.024 0.512 1.536 0.512 2.048-37.888 10.24-75.264 24.064-111.104 40.448 0.512-25.6 0-50.688-2.048-76.288l1.024-1.024c28.16-38.4 57.344-77.824 98.816-101.376 3.072 45.568 7.168 91.136 12.8 136.192z" fill="#EE8067"></path><path d="M750.592 148.992s0-0.512 0 0H755.2c3.584 0.512 6.656 3.072 7.68 7.168 0.512 1.024 0.512 2.56 0.512 3.584 3.072 49.152 7.168 98.304 13.312 146.944 66.56-16.384 135.68-22.528 204.8-18.432 7.168 0.512 10.24 7.168 8.704 12.288 0.512 2.56 0 5.632-2.048 7.68-44.032 52.736-94.72 98.304-151.552 136.192C884.224 456.704 931.328 472.576 967.68 506.88c2.56 2.048 3.072 4.608 3.072 7.168 0 3.072-1.024 6.144-4.608 7.68-45.056 21.504-89.088 44.032-132.608 68.096 53.248 51.2 99.328 111.104 136.192 173.568 7.68 4.608 6.144 18.944-4.096 17.408-69.632-7.168-137.728-24.576-201.216-52.224 14.336 47.104 25.088 95.232 14.848 144.896-0.512 4.096-3.072 6.144-6.144 6.656-2.56 1.024-5.12 1.024-7.68-1.024-40.96-26.624-82.432-52.224-124.928-76.288-11.776 67.584-33.792 133.12-65.024 194.56-5.12 9.728-18.432 3.072-17.408-6.144-34.304-69.632-56.832-144.384-66.56-221.184-32.768 36.864-67.584 71.68-115.2 89.088-4.096 1.536-7.168 0-9.216-2.56-1.536-1.536-2.56-3.584-2.56-6.656 1.024-47.104 0.512-93.696-1.024-140.8-66.56 19.968-135.68 29.696-205.824 28.672-9.216 0-11.776-11.264-6.656-16.384 0-1.536 0.512-2.56 1.536-4.096 37.888-49.664 81.408-93.696 130.56-131.584-41.984-23.04-83.968-44.544-126.976-65.024-3.584-1.536-5.12-4.608-4.608-7.68 0-2.56 0.512-5.12 3.072-7.168 38.912-36.352 89.6-52.224 140.288-65.024-54.784-39.936-103.936-88.064-145.408-142.336-1.024-1.536-1.536-2.56-1.536-4.096-5.12-5.12-2.56-16.384 6.656-16.384 74.24-1.024 147.968 10.24 218.624 32.768-17.408-50.176-31.744-100.864-22.528-154.112 0.512-4.608 3.584-6.656 7.168-6.656 2.048-0.512 4.096-0.512 6.656 1.024 41.472 25.088 83.968 49.664 127.488 72.192 10.752-68.608 32.256-135.68 63.488-198.144-1.024-9.216 12.288-15.872 17.408-6.144 36.352 71.68 59.904 148.48 70.144 227.84 29.184-38.912 60.928-76.8 105.472-97.792 0 0.512 1.024 0 2.048 0z m214.016 157.696c-110.08-4.096-220.16 18.432-319.488 67.072-3.072 1.536-5.632 1.024-8.192 0-4.608 0-9.216-3.072-8.704-9.216 4.608-109.056-16.896-217.6-63.488-315.904-46.592 99.84-68.096 209.92-62.464 320.512 0 2.56-0.512 5.12-2.048 6.144-1.536 5.12-7.68 9.216-13.824 6.144-96.768-52.736-204.288-81.408-314.368-82.944C241.152 386.56 331.264 455.68 433.664 500.224c9.216 0.512 14.848 13.312 5.12 17.408-103.424 44.544-194.56 114.176-263.68 202.752 110.08-1.536 217.6-29.696 314.368-82.944 6.144-3.584 12.288 0.512 13.824 6.144 1.536 1.536 2.56 3.584 2.048 6.144-5.632 110.592 15.872 220.16 62.464 320 46.592-98.304 68.096-206.848 63.488-315.904v-2.048c-1.536-7.168 6.144-15.872 13.312-10.24 89.088 63.488 192 104.448 300.032 118.784-60.928-98.816-144.896-189.44-245.248-248.32-2.048-0.512-3.584-1.536-4.608-3.584-3.584-4.096-2.56-9.728 1.024-13.312 0.512-0.512 1.024-1.024 1.536-1.024 0.512-0.512 1.024-0.512 1.536-1.024 104.448-38.4 193.536-103.936 265.728-186.368z m-20.48 204.8C906.752 481.792 860.16 469.504 814.08 458.24c-28.672 17.408-58.88 32.768-90.624 45.568 33.792 20.992 65.536 45.568 95.232 72.704 0.512-0.512 1.536-1.024 2.048-1.536 40.96-22.016 81.92-43.52 123.392-63.488zM762.88 856.064c5.632-46.592-7.68-92.672-22.016-136.704-31.232-14.848-61.44-31.744-90.112-51.2 1.024 38.912-1.536 77.824-7.168 115.712 0.512 0 1.024 0.512 1.536 0.512 39.936 23.04 78.848 46.592 117.76 71.68z m-4.608-544.768c-0.512-0.512-0.512-1.536-0.512-2.048-5.632-45.056-9.728-90.624-12.8-136.192-41.472 24.064-71.168 62.976-98.816 101.376-0.512 0.512-0.512 1.024-1.024 1.024 2.048 25.088 3.072 50.688 2.048 76.288 35.84-16.896 73.216-30.208 111.104-40.448z m-269.824-67.072c-0.512 0-1.536-0.512-2.048-1.024-40.448-21.504-80.384-44.032-119.808-67.584-4.608 48.128 11.776 95.232 27.648 140.8 0.512 1.024 0.512 2.048 0.512 2.56 30.208 10.752 59.392 23.552 88.064 38.4-1.536-37.376 0.512-75.264 5.632-113.152z m0 500.736c-2.56-28.16-3.072-56.32-2.048-84.48-33.792 17.408-68.608 32.256-104.448 44.032 1.536 44.032 2.048 88.064 1.536 132.096 42.496-19.968 74.752-55.808 104.96-91.648z m-188.928-170.496c34.304-25.088 71.168-46.592 110.08-64.512-33.28-15.36-65.536-33.792-95.744-53.76-1.024 1.024-2.048 1.536-3.584 2.048-46.592 11.264-94.72 23.552-132.608 53.76 41.472 19.456 81.92 40.448 121.856 62.464z" fill="#BE4B53"></path><path d="M646.144 474.624c2.56 37.888-7.68 92.16-51.712 100.864-44.544 8.704-91.648-12.288-97.792-59.904-5.12-38.4-3.072-88.064 42.496-98.304h2.56c0.512 0 1.024 0 1.536-0.512 45.056-3.072 98.816 2.048 102.912 57.856z m-54.272 81.92c32.256-7.168 36.864-51.712 35.328-78.848-1.024-22.016-11.776-35.328-33.28-39.424-16.384-3.072-33.792-3.072-50.176-2.048-33.792 8.192-33.28 52.736-28.16 80.896 6.656 33.792 44.544 46.592 76.288 39.424z" fill="#BE4B53"></path><path d="M627.2 477.696c1.536 27.136-3.584 71.68-35.328 78.848-31.744 7.168-69.632-5.632-76.288-39.936-5.12-28.16-6.144-72.704 28.16-80.896 16.896-1.024 33.792-1.024 50.176 2.048 22.016 4.608 32.256 17.92 33.28 39.936zM486.4 243.712c0.512 0.512 1.536 0.512 2.048 1.024-5.12 37.376-6.656 75.264-5.632 113.664-28.672-14.848-57.856-27.648-88.064-38.4 0-1.024 0-1.536-0.512-2.56-15.872-45.056-31.744-92.16-27.648-140.8 39.424 23.04 79.36 45.568 119.808 67.072zM486.4 660.48c-1.024 28.16-0.512 56.832 2.048 84.48-30.208 35.328-62.464 71.68-104.96 91.648 0.512-44.032 0-88.064-1.536-132.096 35.84-11.776 70.656-26.624 104.448-44.032zM409.6 509.952c-38.912 17.92-75.264 39.936-110.08 64.512-39.936-22.016-80.896-43.008-121.856-62.976 37.888-30.208 86.016-42.496 132.608-53.76 1.536-0.512 2.56-1.024 3.584-2.048 30.208 20.48 62.464 38.912 95.744 54.272z" fill="#EE8067"></path></g></svg>
    );
};
export default UserDefaultAvatar;
