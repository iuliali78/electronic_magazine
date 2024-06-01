
// Функция для создания динамичных стилей в зависимости от условия. Например отображение активной ссылки в сайдбаре
export const createDynamicStyles = (condition: boolean, initialStyles: string, additionalStyles: string) => {
    if(condition) {
        return initialStyles.concat(" " + additionalStyles);
    }

    return initialStyles;
}